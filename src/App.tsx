import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
