import React from "react";
import {
  DadJokeProvider,
  useDadJokeState,
  useDadJokeActions
} from "./contexts/dad-jokes";

import "./app.css";
import logo from "./logo.svg";

function Button() {
  const { fetchDadJoke } = useDadJokeActions();
  console.count("Button");
  return (
    <button className='btn' type="button" onClick={fetchDadJoke}>
      Fetch dad joke
    </button>
  );
}

function DadJoke() {
  const { dadJoke } = useDadJokeState();
  console.count("DadJoke");
  return <p>{dadJoke}</p>;
}

function App() {
  console.count("App");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DadJokeProvider>
          <Button />
          <DadJoke />
        </DadJokeProvider>
      </header>
    </div>
  );
}
export default App;
