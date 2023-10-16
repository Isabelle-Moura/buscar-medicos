import styled from 'styled-components'

export const StyledText = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.2px;
  margin-left: 22px;
`

export const DisplayAndMargin = styled.div`
  display: flex;
  margin: 10px;
`

export const StyledH1 = styled.h1`
  font-family: ${({theme}) => theme.fonts.poppins};
  margin: 30px;
`