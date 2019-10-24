import React from 'react'

const DadJokeContextState = React.createContext()
const DadJokeContextActions = React.createContext()

export function DadJokeProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, { dadJoke: null })

  async function fetchDadJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        accept: 'application/json',
      },
    })
    const data = await response.json()
    dispatch({
      type: 'SET_DAD_JOKE',
      payload: data.joke,
    })
  }

  const actions = React.useMemo(() => ({
    fetchDadJoke
  }), [])
  
  return (
    <DadJokeContextState.Provider value={state}>
      <DadJokeContextActions.Provider value={actions}>
        {children}
      </DadJokeContextActions.Provider>
    </DadJokeContextState.Provider>
  )
}

export function useDadJokeState() {
  return React.useContext(DadJokeContextState)
}

export function useDadJokeActions() {
  return React.useContext(DadJokeContextActions)
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DAD_JOKE':
      return {
        ...state,
        dadJoke: action.payload,
      }
    default:
      return new Error();
  }
}