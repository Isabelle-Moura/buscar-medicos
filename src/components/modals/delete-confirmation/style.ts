import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  width: 400px;
  height: 270px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`
export const CloseTimes = styled.div`
  cursor: pointer;
  margin-left: 370px;
`
export const Message = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`

export const GoBackLink = styled.div`
  color: red;
  cursor: pointer;
`