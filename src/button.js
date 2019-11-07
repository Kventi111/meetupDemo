
import React from 'react';
import { jokeActions } from './utils'

function Button({setDadJoke}) {
  console.count('Button')

  async function fetchDadJoke() {
    console.log('its work')
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        accept: 'application/json',
      },
    })
    const data = await response.json()

    console.log(data)
    setDadJoke(data)
  }

  return (
    <button className='btn' type="button" onClick={fetchDadJoke}>
      Fetch dad joke
    </button>
  )
}



export default jokeActions(Button)
