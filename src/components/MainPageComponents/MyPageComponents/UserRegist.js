import React from "react";
import server from "../../../functions/server";
import util from "../../../functions/util";

function UserRegist() {
    const [userId, setUserId] = React.useState('');
    const [userName, setName] = React.useState('');
    const [userPw, setPw] = React.useState('');
    const [userGoalText, setGoalText] = React.useState('');
    const [inputCode, setInputCode] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const result = window.confirm(util.confirmMessage);
        if (!result) { return }
        const data = {
            id: userId,
            name: userName,
            password: userPw,
            goalText: userGoalText,
            goal: '',
            code: inputCode
        }
        await server.registUser(data);
    }

    return (
        <div className="main">
            <h2>사용자 등록</h2>
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
                                    onChange={(e) => setUserId(e.target.value)}
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
                            <th>각오 한마디</th>
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
                            <th>인증 코드</th>
                            <td>
                                <input
                                    type="text"
                                    name="inputCode"
                                    value={inputCode}
                                    onChange={(e) => setInputCode(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th />
                            <td><button style={{ float: 'right' }} type="submit">등록</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default UserRegist