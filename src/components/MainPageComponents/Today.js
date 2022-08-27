import React from "react";
import server from "../../functions/server";
import util from "../../functions/util";

function Today() {
    const [inputDate, setInputDate] = React.useState(util.dateToString(new Date()));
    const [memo, setMemo] = React.useState('');
    const [checkedGoal, setCheckedGoal] = React.useState([]);
    const [checked, setChecked] = React.useState(false);
    const [userGoalList, setUserGoalList] = React.useState([]);

    const userId = sessionStorage.getItem('id');

    async function initialList() {
        const response = await server.userGoal(userId);
        setUserGoalList(response);
    }

    React.useEffect(() => {
        if (!userId) {

        } else {
            initialList();
        }
    }, []);

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

    function handCheked(e) {
        if (e.target.checked) {
            setChecked(true);
        }
        else {
            setChecked(false);
        }
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
        const goal = userGoalList.filter((gl, index) => checkedGoal.indexOf(index) !== -1).join(util.split);
        const data = {
            id: userId,
            date: inputDate,
            goal: goal,
            check: checked,
            memo: memo
        }
        await server.postToday(data);
    }

    return (
        <div className="main">
            <h3>오늘의 운동</h3>
            {!userId ?
                <p>로그인 후 이용해 주세요</p> :
                <div className="table">
                    <form onSubmit={handleSubmit}>
                        <div className="table-row">
                            <input type="date" name="inputDate" value={inputDate} onChange={(e) => { setInputDate(e.target.value) }} />
                        </div>
                        <div className="table-row" style={{ display: "block" }}>
                            <p style={{ marginBottom: "0.2rem" }}>메모</p>
                            <textarea name="memo" maxLength="255" wrap="soft" value={memo} onChange={(e) => { setMemo(e.target.value) }} />
                        </div>
                        <div className="table-row">
                            <p className="goal-check">goal!</p>
                            <input type="checkbox" name="goal!" value='goal!' onClick={handCheked} />
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