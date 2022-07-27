import UserData from "./MyPageComponents/UserData";
import UserGoal from "./MyPageComponents/UserGoal"

function MyPage() {
    return (
        <div>
            <h3>My Page</h3>
            <UserData />
            <h3>목표 수정</h3>
            <UserGoal />
        </div>
    );
}

export default MyPage