import React from 'react';
import './App.css';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';
import { useCookies } from 'react-cookie';

function Title({ onMyPageClicked }) {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User onMyPageClicked={onMyPageClicked} />
    </header>
  );
};

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleSelect(n) {
    setSelectedMenu(n);
  }

  return (
    <div>
      <Title onMyPageClicked={handleSelect} />
      <MenuBar selectedMenu={selectedMenu} onSelect={handleSelect} />
      <MainPage selectedMenu={selectedMenu} />
    </div>
  );
};

export default App;
