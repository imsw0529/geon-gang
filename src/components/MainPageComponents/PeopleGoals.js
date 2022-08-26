import React from "react";
import server from "../../functions/server";
import { Link } from 'react-router-dom';

function PeopleGoals() {
    const [goalList, setGoalList] = React.useState([]);

    async function initialList() {
        const response = await server.peopleGoal();
        setGoalList(response);
    }

    React.useEffect(() => {
        initialList();
    }, []);

    const goalElements = goalList.map((user) => {
        return (
            <Link to={"/record/" + user.id} style={{ color: "black", textDecoration: "none" }} >
                <div key={user.id} className="table-row">
                    <span className="table-user">{user.name}</span>
                    <div className="table-goal">
                        <table>
                            <tbody>
                                <tr>
                                    <th>각오 한마디</th>
                                    <td>{user.goalText}</td>
                                </tr>
                                <tr>
                                    <th>운동 목표</th>
                                    <td>{user.goal}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="main">
            <h3>각자의 목표</h3>
            <div className="table">
                {goalElements}
            </div>
        </div>
    );
}

export default PeopleGoals