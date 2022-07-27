import React from "react";

function UserData() {
    const [userId, setId] = React.useState('user id');
    const [userName, setName] = React.useState('user name');
    const [userPw, setPw] = React.useState('');
    const [userGoalText, setGoalText] = React.useState('user goal');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userId);
        console.log(userName);
        console.log(userPw);
        console.log(userGoalText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input
                                type="text"
                                name="userId"
                                value={userId}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input
                                type="text"
                                name="userName"
                                value={userName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input
                                type="password"
                                name="userPw"
                                value={userPw}
                                onChange={(e) => setPw(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>목표</th>
                        <td>
                            <input
                                type="text"
                                name="userGoalText"
                                value={userGoalText}
                                onChange={(e) => setGoalText(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th />
                        <td><button style={{ float: 'right' }} type="submit">수정</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

function UserGoal() {
    const [userGoalList, setUserGoalList] = React.useState([
        'goal1',
        'goal2',
        'goal3',
        'goal4'
    ])

    function handleChange(e, index) {
        const prev = userGoalList.slice(0, index);
        const post = userGoalList.slice(index + 1, userGoalElements.length);
        const changed = [
            ...prev,
            e.target.value,
            ...post
        ]
        setUserGoalList(changed);
    }

    function removeGoal(index) {
        const prev = userGoalList.slice(0, index);
        const post = userGoalList.slice(index + 1, userGoalElements.length);
        const changed = [
            ...prev,
            ...post
        ]
        setUserGoalList(changed);
    }

    function addGoal() {
        const changed = [...userGoalList, ''];
        setUserGoalList(changed);
    }

    const userGoalElements = userGoalList.map((goal, index) => {
        return (
            <tr key={index}>
                <td>
                    <input
                        type="text"
                        name={"goal"}
                        value={goal}
                        onChange={(e) => {
                            handleChange(e, index);
                        }}
                    />
                </td>
                <td>
                    <button onClick={() => { removeGoal(index) }}>
                        지우기
                    </button>
                </td>
            </tr>
        )
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userGoalList);
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    {userGoalElements}
                    <tr>
                        <td>
                            <button type="button" style={{ float: 'right' }} onClick={addGoal}>
                                추가
                            </button>
                        </td>
                        <td>
                            <button type="submit">
                                수정
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

function MyPage() {
    return (
        <div>
            <h3>My Page</h3>
            <UserData />
            <UserGoal />
        </div>
    );
}

export default MyPage