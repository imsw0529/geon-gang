import React from "react";
import server from "../../functions/server";
import { Link } from 'react-router-dom';

function ThisWeek() {
    const dayNumber = 7;
    const [thisWeekList, setThisWeekList] = React.useState([]);

    async function initialList() {
        const response = await server.thisWeek();
        setThisWeekList(response);
    }

    React.useEffect(() => {
        initialList();
    }, [])

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
            <Link to={"/record/" + user.id} style={{ color: "black", textDecoration: "none" }} >
                <div key={user.id} className="table-row">
                    <p className="table-user">{user.name}</p>
                    <p className="table-data">{heartBar}</p>
                    <p>{percent.toFixed(2) + '%'}</p>
                </div>
            </Link>
        )
    });

    return (
        <div className="main">
            <h3>이번 주의 달성률</h3>
            <div className="table">
                {thisWeekElements}
            </div>
        </div>
    );
}

export default ThisWeek