import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Card from './components/Card/Card'
import cardData from './cards.json'


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    cardData,
    clickedList: [],
    gameMessage: "Click an image to begin"
  }

  componentDidMount() {
    const { cardData } = this.state
    this.shuffleCards(cardData)
  }

  handleClick = (id) =>{
    const { score, clickedList, cardData, highScore } = this.state;
    const isClicked = clickedList.includes(id)
    this.shuffleCards(cardData)
    if ( isClicked ) {
      const bestScore = Math.max(score, highScore)
      this.setState({
        gameMessage: "You Guessed Incorrectly!"
      })
      this.resetGame(bestScore)
    } else {
      const newScore = score + 1
      if (newScore > highScore) {
        this.setState({
          highScore: newScore
        })
      }
      this.setState({
        score: newScore,
        clickedList: [...clickedList, id],
        gameMessage: "You Guessed Correctly!"
      })

      if ( newScore === cardData.length ) {
        this.resetGame(newScore)
      }
    }
  }

  shuffleCards = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.setState({
      cardData: [...array]
    })
  }

  resetGame = (highScore) => {
    this.setState( {
      score: 0,
      clickedList: [],
      highScore: highScore
    })
  }


  render() {
    return (
      <div className="cardbody">
        {/* Navbar */}
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
          gameMessage={this.state.gameMessage}
        />
        {/* Jumbotron */}
        <Jumbotron />
        <div className="cards">
          {this.state.cardData.map( (card) => (
            <Card 
              image={card.image} 
              handleClick={this.handleClick}
              key={card.id}
              id={card.id}
              name={card.name}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
