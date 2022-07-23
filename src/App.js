import React from 'react';
import './App.css';
import Login from './components/Login';

function Title() {
  return (
    <header>
      <h1>개강총회 건강증진 대회</h1>
      <Login />
    </header>
  );
};

function MenuBar() {
  return (
    <div className='menu-bar'>
      <p>menu1</p>
      <p>menu2</p>
      <p>menu3</p>
      <p>menu4</p>
    </div>
  );
};

function MainPage() {
  return (
    <div className='main'>
      <p>MainPage</p>
    </div>
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
