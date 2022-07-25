import React from 'react';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import MenuBar from './components/MenuBar';
import MainPage from './components/MainPage';

function Title() {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <User />
    </header>
  );
};

function App() {
  return (
    <div>
      <Title />
      <MenuBar />
      <MainPage />
    </div>
  );
};

export default App;
