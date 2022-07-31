import React from "react";
import server from "../../../functions/server";

function UserPage({ userId, changeMode }) {
    const [userName, setName] = React.useState('');
    const [userGoalText, setGoalText] = React.useState('');

    async function initialFunc() {
        const userData = await server.userData(userId);
        setName(userData.userName);
        setGoalText(userData.userGoalText);
    }

    React.useEffect(() => {
        initialFunc();
    }, [])

    return (
        <table>
            <tbody>
                <tr>
                    <th>아이디</th>
                    <td>
                        <p>{userId}</p>
                    </td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>
                        <p>{userName}</p>
                    </td>
                </tr>
                <tr>
                    <th>목표</th>
                    <td>
                        <p>{userGoalText}</p>
                    </td>
                </tr>
                <tr>
                    <th />
                    <td><button style={{ float: 'right' }} onClick={changeMode} >정보 수정하기</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default UserPage