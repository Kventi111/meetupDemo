import React from 'react';

import { jokeState } from './utils'

function DadJoke({dadJoke}) {
  console.count('DadJoke')
  return (
    <p>
      {dadJoke.joke || 'Fetch dad joke'}
    </p>
  )
}


export default jokeState(DadJoke)