import { connect } from "react-redux";
import { setDadJoke } from './actions'

export const jokeState = Component => {
  const mapStateToProps = state => ({
    dadJoke: state.dadJoke
  })
  return connect(mapStateToProps,{})(Component);
};


export const jokeActions = Component => {
  const mapDispatchToProps = ({
    setDadJoke
  })
  return connect(null,mapDispatchToProps)(Component);
};
