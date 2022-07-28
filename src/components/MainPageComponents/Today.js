import React from "react";
import util from "../../functions/util";

function Today() {
    const [inputDate, setInputDate] = React.useState(util.dateToString(new Date()));
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
            <div key={index} className="table-row">
                <span className="goal-name">{goal}</span>
                <input type="checkbox" name="goal" value={goal} />
            </div>
        )
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h3>오늘의 운동</h3>
            <div className="table">
                <form onSubmit={handleChange}>
                    <div className="table-row">
                        <input type="date" name="inputDate" value={inputDate} onChange={(e) => { setInputDate(e.target.value) }} />
                    </div>
                    {userGoalElements}
                    <div className="table-row">

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Today