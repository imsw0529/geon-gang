import React from "react";
import util from "../../functions/util";

function Today() {
    const [inputDate, setInputDate] = React.useState(util.dateToString(new Date()));
    const [checkedGoal, setCheckedGoal] = React.useState([]);

    const userGoalList = [
        'goal1',
        'goal2',
        'goal3',
        'goal4'
    ];

    function handleChange(e, index) {
        let temp = checkedGoal;
        if (e.target.checked) {
            temp = [...temp, index];
            temp.sort();
        } else {
            temp.splice(temp.indexOf(index), 1);
        }
        setCheckedGoal(temp);
    }

    const userGoalElements = userGoalList.map((goal, index) => {
        return (
            <div key={index} className="table-row">
                <span className="goal-name">{goal}</span>
                <input type="checkbox" name="goal" value={goal} onClick={(e) => { handleChange(e, index) }} />
            </div>
        )
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputDate);
        console.log(checkedGoal);
    }

    return (
        <div>
            <h3>오늘의 운동</h3>
            <div className="table">
                <form onSubmit={handleSubmit}>
                    <div className="table-row">
                        <input type="date" name="inputDate" value={inputDate} onChange={(e) => { setInputDate(e.target.value) }} />
                    </div>
                    {userGoalElements}
                    <div className="submit-row">
                        <button type="submit">입력</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Today