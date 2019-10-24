import React from 'react';
import {
  DadJokeProvider,
  useDadJokeState,
  useDadJokeActions,
} from './contexts/dad-jokes'
// import logo from './logo.svg';

function Button() {
  const { fetchDadJoke } = useDadJokeActions()
  console.count('Button')
  return (
    <button type="button" onClick={fetchDadJoke}>
      Fetch dad joke
    </button>
  )
}

function DadJoke() {
  const { dadJoke } = useDadJokeState()
  console.count('DadJoke')
  return (
    <p>{dadJoke}</p>
  )
}

function App() {
  console.count('App')
  return (
    <DadJokeProvider>
      <Button />
      <DadJoke />
    </DadJokeProvider>
  )
}
export default App;
