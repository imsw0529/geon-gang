import MyPage from "./MainPageComponents/MyPage";

function MainPage({ selectedMenu }) {
    let showPage = null

    switch (selectedMenu) {
        case 0:
            showPage = <MyPage />
            break;
        default:
            showPage = <p>MainPage {selectedMenu}</p>
        // alert('선택된 페이지가 존재하지 않습니다.');
    }

    return (
        <div className='main'>
            {showPage}
        </div>
    );
};

export default MainPage