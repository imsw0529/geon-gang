import React from "react";
import UserData from "./MyPageComponents/UserData";
import UserGoal from "./MyPageComponents/UserGoal"

function MyPage() {
    const userId = 'userid';

    return (
        <div>
            <h3>My Page</h3>
            <UserData userId={userId} />
            <h3>목표 수정</h3>
            <UserGoal userId={userId} />
        </div>
    );
}

export default MyPage