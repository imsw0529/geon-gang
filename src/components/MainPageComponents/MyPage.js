import React from "react";

function MyPage() {
    const [userId, setId] = React.useState('user id');
    const [userName, setName] = React.useState('user name');
    const [userPw, setPw] = React.useState('user password');
    const [userGoal, setGoal] = React.useState('user goal');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userId);
        console.log(userName);
        console.log(userPw);
        console.log(userGoal);
    }

    return (
        <div>
            <h3>My Page</h3>
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
                                    name="userGoal"
                                    value={userGoal}
                                    onChange={(e) => setGoal(e.target.value)}
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
        </div>
    );
};

export default MyPage