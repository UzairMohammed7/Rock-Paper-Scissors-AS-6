import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import GameResult from '../GameResult'
import ScoreView from '../ScoreView'

import './index.css'

import {
  MainContainer,
  RulesContainer,
  RulesButton,
  RiCloseLineButton,
  PopupImage,
  PopupView,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    resultImages: [choicesList[0], choicesList[1]],
    isGameStarted: true,
    resultText: '',
    score: 0,
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResults = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachChoice => eachChoice.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      resultText: result,
      resultImages: [choice1[0], choice2],
      isGameStarted: false,
    })
  }

  restartGame = () => this.setState({isGameStarted: true})

  render() {
    const {score, resultImages, isGameStarted, resultText} = this.state
    return (
      <MainContainer>
        <ScoreView score={score} />
        <GameResult
          choicesList={choicesList}
          resultText={resultText}
          resultImages={resultImages}
          isGameStarted={isGameStarted}
          checkResults={this.checkResults}
          restartGame={this.restartGame}
        />
        <RulesContainer>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopupView>
                <RiCloseLineButton type="button" onClick={() => close()}>
                  <RiCloseLine className="close-img" />.
                </RiCloseLineButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </RulesContainer>
      </MainContainer>
    )
  }
}

export default Home
