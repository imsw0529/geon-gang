import React from "react";
import server from "../../../functions/server";

function UserGoal({ userId }) {
    const [userGoalList, setUserGoalList] = React.useState([]);

    async function initialList() {
        const response = await server.userGoal(userId);
        setUserGoalList(response);
    }

    React.useEffect(() => {
        initialList();
    }, [])

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
                    <button type="button" onClick={() => { removeGoal(index) }}>
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

export default UserGoal