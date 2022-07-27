import React from "react";

function Today() {
    const [userGoalList, setUserGoalList] = React.useState([
        'goal1',
        'goal2',
        'goal3',
        'goal4'
    ])

    function handleChange(e, index) {

    }

    const userGoalElements = userGoalList.map((goal, index) => {
        return (
            <tr key={index}>
                <td>
                    <p>{goal}</p>
                </td>
                <td>
                    <input type="checkbox" name="goal" value={goal} />
                </td>
            </tr>
        )
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h3>오늘의 운동</h3>
            <form onSubmit={handleChange}>
                <table>
                    <tbody>
                        {userGoalElements}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Today