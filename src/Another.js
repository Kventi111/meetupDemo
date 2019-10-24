import React, { Component } from 'react'
import {
  DadJokeProvider,
  useDadJokeState,
  useDadJokeActions,
} from './contexts/dad-jokes'

export default class Another extends Component {

  render() {
    console.log(useDadJokeState)
    console.log(useDadJokeActions)
    return (
      <div>
        
      </div>
    )
  }
}
