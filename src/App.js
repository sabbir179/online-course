import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="main" >
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
