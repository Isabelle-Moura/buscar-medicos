import styled from 'styled-components'

export const ContentWrapper = styled.div`
   * {
    font-family: ${({theme}) => theme.fonts.poppins};
  }
`

export const InputWrapper = styled.div`
   display: flex; 
   margin: 9px; 
   align-items: center;
   justify-content: center;
`

export const InfoWrapper = styled.div`
   display: flex; 
   flex-direction: column;
   margin: 10px; 
   align-items: flex-start;
   justify-content: center;
   background-color: ${({theme}) => theme.colors.white};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 5px;
  margin-top: 15px;
`

export const Warning = styled.div`
  font-size: 13px;
  max-width: 150px;
`