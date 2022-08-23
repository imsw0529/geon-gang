import React from "react";
import UserData from "./MyPageComponents/UserData";
import UserGoal from "./MyPageComponents/UserGoal"
import UserPage from "./MyPageComponents/UserPage";

function MyPage() {
    const [mode, setMode] = React.useState(0);
    let user = null;
    switch (mode) {
        case 0: // 조회
            user = <UserPage changeMode={() => { setMode(1) }} />
            break;
        case 1: // 수정
            user = <UserData />
            break;
    }

    return (
        <div className="main">
            <h3>My Page</h3>
            {user}
            <h3>목표 수정</h3>
            <UserGoal />
        </div>
    );
}

export default MyPage