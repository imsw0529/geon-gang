import React from "react";
import { useNavigate } from "react-router-dom";
import server from "../../../functions/server";

function UserPage({ changeMode }) {
    const [userGoalText, setGoalText] = React.useState('');

    const userId = sessionStorage.getItem('id');
    const userName = sessionStorage.getItem('name');

    const navigate = useNavigate();

    async function initialFunc() {
        const userData = await server.userData(userId);
        setGoalText(userData.userGoalText);
    }

    React.useEffect(() => {
        initialFunc();
    }, [])

    const logout = () => {
        sessionStorage.clear();
        navigate(`/`);
    }

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
                    <th>각오 한마디</th>
                    <td>
                        <p>{userGoalText}</p>
                    </td>
                </tr>
                <tr>
                    <th />
                    <td><button style={{ float: 'right' }} onClick={changeMode} >정보 수정하기</button></td>
                    <td><button style={{ float: 'right' }} onClick={logout} >로그아웃</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default UserPage