const initState = {
  dadJoke : [],
}

const appReducer = (state = initState, { payload,type }) => {
  switch(type) {
    case "SET_DAD_JOKE":
      return {
        ...state,
        dadJoke : payload
      }
    default:
      return state
  }
}


export default appReducer;