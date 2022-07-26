function ThisWeek() {
    const dayNumber = 7;
    const thisWeekList = [
        {
            id: 'id1',
            name: 'user1',
            checkedGoal: 4
        },
        {
            id: 'id2',
            name: 'user2',
            checkedGoal: 3
        },
        {
            id: 'id3',
            name: 'user3',
            checkedGoal: 6
        }
    ];

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
            <tr key={user.id}>
                <th>{user.name}</th>
                <td>{heartBar + percent.toFixed(2) + '%'}</td>
            </tr>
        )
    });

    return (
        <div>
            <h3>이번 주의 달성률</h3>
            <table className="ranking-table">
                <tbody>
                    {thisWeekElements}
                </tbody>
            </table>
        </div>
    );
}

export default ThisWeek