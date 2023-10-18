import styled from 'styled-components'

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro */
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MessageBackground = styled.div`
  background-color: #fff;
  width: 550px;
  height: 350px;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const CloseTimes = styled.div`
  cursor: pointer;
  margin-left: 480px;
  margin-top: -10px;
  font-size: 25px;
`
export const Message = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 38px;
  text-align: center;
`

export const GoBackLink = styled.div`
  margin-top: 10px;
  color: red;
  cursor: pointer;
  font-size: 18px;
`