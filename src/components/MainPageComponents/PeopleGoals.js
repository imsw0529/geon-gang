import React from "react";
import server from "../../functions/server";

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
            <div key={user.id} className="table-row">
                <span className="table-user">{user.name}</span>
                <div className="table-goal">
                    <p className="goal-text">{user.goalText}</p>
                    <p>{user.goal}</p>
                </div>
            </div>
        );
    });

    return (
        <div>
            <h3>각자의 목표</h3>
            <div className="table">
                {goalElements}
            </div>
        </div>
    );
}

export default PeopleGoals