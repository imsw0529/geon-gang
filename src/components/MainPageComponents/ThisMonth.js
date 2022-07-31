import React from "react";
import server from "../../functions/server";

function ThisMonth() {
    let d1 = new Date().setDate(1);
    let d2 = new Date().setMonth(new Date().getMonth() + 1, 1);
    const dayNumber = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));

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