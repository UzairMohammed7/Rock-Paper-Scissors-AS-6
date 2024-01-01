import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`

export const ChoicesButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  text-align: center;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 200;
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ResultAndPlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
