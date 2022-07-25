import MyPage from "./MainPageComponents/MyPage";
import PeopleGoals from "./MainPageComponents/PeopleGoals";
import ThisMonth from "./MainPageComponents/ThisMonth";
import ThisWeek from "./MainPageComponents/ThisWeek";
import Today from "./MainPageComponents/Today";

function MainPage({ selectedMenu }) {
    let showPage = null

    switch (selectedMenu) {
        case 0:
            showPage = <MyPage />
            break;
        case 1:
            showPage = <ThisWeek />
            break;
        case 2:
            showPage = <ThisMonth />
            break;
        case 3:
            showPage = <PeopleGoals />
            break;
        case 4:
            showPage = <Today />
            break;
        default:
            alert('선택된 페이지가 존재하지 않습니다.');
    }

    return (
        <div className='main'>
            {showPage}
        </div>
    );
};

export default MainPage