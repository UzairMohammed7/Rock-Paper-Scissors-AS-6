import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  margin-top: 2%;
`
export const ChoicesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChoicesText = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 200;
  font-size: 22px;
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 15%;
  border-radius: 8px;
  padding: 10px;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const ScoreText = styled.p`
  color: #223a5b;
  font-family: 'Bree Serif';
  margin-bottom: 0;
  font-size: 25px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const Score = styled.p`
  color: #223a5b;
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 35px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
