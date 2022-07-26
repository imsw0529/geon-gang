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
            <tr key={user.id}>
                <th>{user.name}</th>
                <td><div>
                    <p>{user.goalText}</p>
                    <p>{user.goal}</p>
                </div></td>
            </tr>
        );
    });

    return (
        <div>
            <h3>각자의 목표</h3>
            <table className="ranking-table">
                <tbody>
                    {goalElements}
                </tbody>
            </table>
        </div>
    );
}

export default PeopleGoals