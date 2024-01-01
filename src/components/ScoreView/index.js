import {
  ScoreContainer,
  ChoicesTextContainer,
  ChoicesText,
  ScoreViewContainer,
  ScoreText,
  Score,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ChoicesTextContainer>
        <ChoicesText>
          Rock <br />
          Paper <br /> Scissors
        </ChoicesText>
      </ChoicesTextContainer>
      <ScoreViewContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreViewContainer>
    </ScoreContainer>
  )
}

export default ScoreView
