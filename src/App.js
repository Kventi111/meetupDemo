import React from 'react';

import Button from './button'
import DadJoke from './dadJoke'
import logo from './logo.svg';

import './App.css';

function App(props) {

  console.count('App')
  console.log(props)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button  />
        <DadJoke />
      </header>
    </div>
  );
}


export default App;

