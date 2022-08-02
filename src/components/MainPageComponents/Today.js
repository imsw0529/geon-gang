import React from "react";
import server from "../../functions/server";
import util from "../../functions/util";

function Today({ userId }) {
    const [inputDate, setInputDate] = React.useState(util.dateToString(new Date()));
    const [checkedGoal, setCheckedGoal] = React.useState([]);
    const [userGoalList, setUserGoalList] = React.useState([]);

    async function initialList() {
        const response = await server.userGoal(userId);
        setUserGoalList(response);
    }

    React.useEffect(() => {
        if (!userId) {

        } else {
            initialList();
        }
    }, [userId]);

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

    async function handleSubmit(e) {
        e.preventDefault();
        const check = (userGoalList.length === checkedGoal.length)
        const goal = userGoalList.filter((gl, index) => checkedGoal.indexOf(index) !== -1).join('/');
        const data = {
            id: userId,
            date: inputDate,
            goal: goal,
            check: check
        }
        await server.postToday(data);
    }

    return (
        <div>
            <h3>오늘의 운동</h3>
            {!userId ?
                <p>로그인 후 이용해 주세요</p> :
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
                </div>}
        </div>
    );
}

export default Today