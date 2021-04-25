
import './App.css';
import React, {useState} from 'react';
import Docs from './components/Docs';
import Community from './components/Community';
import Tutoriels from './components/Tutoriels';
import Menu from './components/Menu';


function App() {
 
  return (
    <div className="App">
        <Menu/>
        <Docs/>
        <Community/>
        <Tutoriels/>
    </div>
  );
}

export default App;
