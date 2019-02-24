import React, { Component } from 'react'
import './Jumbotron.css'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Clicky Game</h1>
        <h3>Click on an image to earn points, but don't click on any more than once!</h3>
      </div>
    )
  }
}

export default Jumbotron