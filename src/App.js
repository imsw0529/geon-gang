import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';
import { CookiesProvider, useCookies } from 'react-cookie';
import ThisWeek from './components/MainPageComponents/ThisWeek';
import ThisMonth from './components/MainPageComponents/ThisMonth';
import PeopleGoals from './components/MainPageComponents/PeopleGoals';
import Today from './components/MainPageComponents/Today';
import MyRecord from './components/MainPageComponents/MyRecord';
import MyPage from './components/MainPageComponents/MyPage';
import UserRegist from './components/MainPageComponents/MyPageComponents/UserRegist';

function Title({ onMyPageClicked }) {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User onMyPageClicked={onMyPageClicked} />
    </header>
  );
};

function Main() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [userId, setUserId] = React.useState();

  React.useEffect(() => {
    cookies.user && setUserId(cookies.user);
  }, [cookies])

  return (
    <div className='main'>

    </div>
  );
}

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Title />
        <MenuBar />
        <Routes>
          <Route path='/' element={<Navigate to="/this_week" />} />
          <Route path='/this_week' element={<ThisWeek />} />
          <Route path='/this_month' element={<ThisMonth />} />
          <Route path='/people_goal' element={<PeopleGoals />} />
          <Route path='/today' element={<Today />} />
          <Route path='/record' element={<MyRecord />} />
          <Route path='/record/:userid' element={<MyRecord />} />
          <Route path='/my_page' element={<MyPage />} />
          <Route path='/regist' element={<UserRegist />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
};

export default App;
