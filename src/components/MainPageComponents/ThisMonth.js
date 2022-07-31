import React from "react";
import server from "../../functions/server";
import util from "../../functions/util";

function ThisMonth() {
    const dayNumber = util.monthDayNum();

    const [thisMonthList, setThisMonthList] = React.useState([]);
    React.useEffect(() => { setThisMonthList(server.thisMonth().list) }, []);

    const thisMonthElements = thisMonthList.map((user) => {
        const percent = 100 * user.checkedGoal / dayNumber;
        let heartBar = '';

        for (let i = 0; i < 10; i++) {
            if ((percent / 10).toFixed() > i) {
                heartBar += '♥';
            } else {
                heartBar += '♡';
            }
        }
        heartBar += ' ';

        return (
            <div key={user.id} className="table-row">
                <span className="table-user">{user.name}</span>
                <span className="table-data">{heartBar + percent.toFixed(2) + '%'}</span>
            </div>
        )
    });

    return (
        <div>
            <h3>이번 달의 달성률</h3>
            <div className="table">
                {thisMonthElements}
            </div>
        </div>
    );
}

export default ThisMonth