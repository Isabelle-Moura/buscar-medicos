import styled from 'styled-components'

export const WhiteBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 10px 1px 30px #ecdef0;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  margin: 1.5%;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin: 1% 2% 0% 3%;
  padding: 2px;
`

export const CardsContainer = styled.div`
  margin-top: 8px;
`