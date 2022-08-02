import React from "react";

function MyRecord() {
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth() + 1);
    const [recordList, setRecordList] = React.useState([]);

    const dayText = ['일', '월', '화', '수', '목', '금', '토'];

    function initialList() {
        const response = [
            {
                day: 1,
                goal: "goal1/goal2"
            },
            {
                day: 2,
                goal: "goal1/goal2"
            },
            {
                day: 4,
                goal: "goal1"
            },
        ];
        setRecordList(response);
    }

    React.useEffect(() => {
        initialList();
    }, [selectedMonth])

    function handlePrevClick() {
        let n = selectedMonth - 1;
        if (n < 1) {
            n += 12;
            setSelectedYear(selectedYear - 1);
        }
        setSelectedMonth(n);
    }

    function handlePostClick() {
        let n = selectedMonth + 1;
        if (n > 12) {
            n -= 12;
            setSelectedYear(selectedYear + 1);
        }
        setSelectedMonth(n);
    }

    const recordElements = recordList.map((record) => {
        const date = new Date(selectedYear, selectedMonth - 1, record.day);

        return (
            <div className="record-day" key={record.day}>
                <p>{record.day}일</p>
                <p>{dayText[date.getDay()]}</p>
                <span>{record.goal}</span>
            </div>
        )
    })

    return (
        <div>
            <h3>나의 운동</h3>
            <div className="select-month">
                <button onClick={handlePrevClick}>이전달</button>
                <h4>{selectedYear}년 {selectedMonth}월</h4>
                <button onClick={handlePostClick}>다음달</button>
            </div>
            {recordElements}
        </div>
    );
}

export default MyRecord