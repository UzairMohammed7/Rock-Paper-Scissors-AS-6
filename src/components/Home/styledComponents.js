import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #223a5f;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 10px;
  padding-left: 10px;
`

export const RulesContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const RulesButton = styled.button`
  font-family: 'Bree Serif';
  text-align: center;
  color: #223a5b;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 4px;
  width: 80px;
  height: 2%;
  padding-top: 5px;
  padding-bottom: 5px;
  align-self: flex-end;
  outline: none;
  border: none;
  cursor: pointer;
`

export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vw;
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopupImage = styled.img`
  margin-top: auto;
  height: 100%;
  width: 100%;
`

export const RiCloseLineButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  outline: none;
  border: none;
  cursor: pointer;
`
