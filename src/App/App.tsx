import React from 'react';
import { Header } from '../components/Header/Header';
/**
 * Components
 */
import { MainPage } from '../pages/MainPage/MainPage';
/**
 * Assets
 */
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage /> 
    </div>
  );
}

export default App;
