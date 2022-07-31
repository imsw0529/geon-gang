import React from "react";
import server from "../../functions/server";

function ThisWeek() {
    const dayNumber = 7;
    const [thisWeekList, setThisWeekList] = React.useState([]);

    React.useEffect(() => { setThisWeekList(server.thisWeek().list); }, [])

    const thisWeekElements = thisWeekList.map((user) => {
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
            <h3>이번 주의 달성률</h3>
            <div className="table">
                {thisWeekElements}
            </div>
        </div>
    );
}

export default ThisWeek