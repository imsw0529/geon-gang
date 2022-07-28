function ThisMonth() {
    let d1 = new Date().setDate(1);
    let d2 = new Date().setMonth(new Date().getMonth() + 1, 1);
    const dayNumber = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));

    const thisWeekList = [
        {
            id: 'id1',
            name: 'user1',
            checkedGoal: 20
        },
        {
            id: 'id2',
            name: 'user2',
            checkedGoal: 14
        },
        {
            id: 'id3',
            name: 'user3',
            checkedGoal: 8
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
                {thisWeekElements}
            </div>
        </div>
    );
}

export default ThisMonth