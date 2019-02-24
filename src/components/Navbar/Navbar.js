import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <ul>
          <li>
            <h1 className="title">React Clicky Game</h1>
          </li>
          <li>
            <h2 className="guess">{this.props.gameMessage}</h2>
          </li>
          <li>
            <h2 className="score">Score: {this.props.score} | Top Score: {this.props.highScore}</h2>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar