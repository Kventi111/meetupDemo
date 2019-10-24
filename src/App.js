import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import * as actions from './actions';
import './App.css';


function Button({setDadJoke}) {
  console.count('Button')
  return (
    <button className='btn' type="button" onClick={setDadJoke}>
      Fetch dad joke
    </button>
  )
}

function DadJoke({dadJoke}) {
  console.count('DadJoke')
  return (
    <p>
      {dadJoke.joke || 'Fetch dad joke'}
    </p>
  )
}

function App({dadJoke,setDadJoke}) {

  async function fetchDadJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        accept: 'application/json',
      },
    })
    const data = await response.json()

    setDadJoke(data)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button setDadJoke={fetchDadJoke} />
        <DadJoke dadJoke={dadJoke}/>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = {
  ...actions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
