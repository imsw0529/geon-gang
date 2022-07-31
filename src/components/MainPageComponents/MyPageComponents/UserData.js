import React from "react";
import server from "../../../functions/server";

function UserData({ userId }) {
    const [userName, setName] = React.useState('');
    const [userPw, setPw] = React.useState('');
    const [userGoalText, setGoalText] = React.useState('');

    async function initialFunc() {
        const userData = await server.userData(userId);
        setName(userData.userName);
        setGoalText(userData.userGoalText);
    }

    React.useEffect(() => {
        initialFunc();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: userId,
            name: userName,
            password: userPw,
            goalText: userGoalText
        }
        console.log(data);
        await server.postUserData(data);
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
                                readOnly
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

export default UserData