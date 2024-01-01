import {
  GameContainer,
  ChoicesButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultAndPlayAgainContainer,
} from './styledComponents'

import './index.css'

const GameResult = props => {
  const {
    choicesList,
    isGameStarted,
    checkResults,
    resultText,
    resultImages,
    restartGame,
  } = props
  return (
    <GameContainer>
      {isGameStarted && (
        <>
          <ChoicesButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResults(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </ChoicesButton>
          <ChoicesButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResults(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </ChoicesButton>
          <ChoicesButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResults(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </ChoicesButton>
        </>
      )}
      {!isGameStarted && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={resultImages[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={resultImages[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultAndPlayAgainContainer>
            <ResultText>{resultText}</ResultText>
            <button
              type="button"
              onClick={restartGame}
              className="play-again-button"
            >
              Play Again
            </button>
          </ResultAndPlayAgainContainer>
        </>
      )}
    </GameContainer>
  )
}

export default GameResult
