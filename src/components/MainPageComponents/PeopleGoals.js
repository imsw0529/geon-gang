function PeopleGoals() {
    const goalList = [
        {
            id: 'id1',
            name: 'user1',
            goalText: 'goalText1',
            goal: 'goal'
        },
        {
            id: 'id2',
            name: 'user2',
            goalText: 'goalText2',
            goal: 'goal'
        },
        {
            id: 'id3',
            name: 'user3',
            goalText: 'goalText3',
            goal: 'goal'
        },
    ]

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