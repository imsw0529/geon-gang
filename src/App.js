import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';

function Title({ onMyPageClicked }) {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User onMyPageClicked={onMyPageClicked} />
    </header>
  );
};

function Main() {
  const [selectedMenu, setSelectedMenu] = React.useState(1);

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
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
