import styled from 'styled-components'

export const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin: 10px 15px 0px 15px;
  padding: 2px;
`