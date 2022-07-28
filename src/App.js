import React from 'react';
import './App.css';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';

function Title({ onMyPageClicked, userId }) {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User onMyPageClicked={onMyPageClicked} userId={userId} />
    </header>
  );
};

function App() {
  const [userId, setUserId] = React.useState('userid');
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  function handleSelect(n) {
    setSelectedMenu(n);
  }

  return (
    <div>
      <Title onMyPageClicked={handleSelect} userId={userId} />
      <MenuBar selectedMenu={selectedMenu} onSelect={handleSelect} />
      <MainPage selectedMenu={selectedMenu} userId={userId} />
    </div>
  );
};

export default App;
