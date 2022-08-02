import React from 'react';
import './App.css';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';

function Title({ changeUserId, onMyPageClicked, userId }) {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User changeUserId={changeUserId} onMyPageClicked={onMyPageClicked} userId={userId} />
    </header>
  );
};

function App() {
  const [userId, setUserId] = React.useState('');
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  function handleSelect(n) {
    setSelectedMenu(n);
  }

  function handleUserId(id) {
    setUserId(id);
  }

  return (
    <div>
      <Title changeUserId={handleUserId} onMyPageClicked={handleSelect} userId={userId} />
      <MenuBar selectedMenu={selectedMenu} onSelect={handleSelect} />
      <MainPage selectedMenu={selectedMenu} userId={userId} />
    </div>
  );
};

export default App;
