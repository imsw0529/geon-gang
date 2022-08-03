import React from "react";
import { useCookies } from "react-cookie";
import server from "../../functions/server";

function MyRecord() {
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth() + 1);
    const [recordList, setRecordList] = React.useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const dayText = ['일', '월', '화', '수', '목', '금', '토'];

    async function initialList() {
        const response = await server.myRecord(cookies.user.id, selectedYear, selectedMonth);
        setRecordList(response);
    }

    React.useEffect(() => {
        if (!cookies.user) { } else {
            initialList();
        }
    }, [cookies, selectedMonth])

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
                <div>
                    <p>{record.goal}</p>
                    {record.memo ? <span>{record.memo}</span> : ''}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h3>나의 운동</h3>
            {!cookies.user ? <p>로그인 후 이용해 주세요</p> :
                <div className="select-month">
                    <button onClick={handlePrevClick}>이전달</button>
                    <h4>{selectedYear}년 {selectedMonth}월</h4>
                    <button onClick={handlePostClick}>다음달</button>
                </div>}
            {recordElements}
        </div>
    );
}

export default MyRecord