import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  width: 400px;
  height: 270px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  border-radius: 10px;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Close = styled.div`
  cursor: pointer;
  margin-left: 25vw;
  margin-top: -60px;
`
export const Message = styled.div`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  max-width: 300px;
`