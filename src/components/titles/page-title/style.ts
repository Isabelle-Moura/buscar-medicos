import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 5px;
  margin: 25px 0px 15px 15px;
`

export const PageTitle = styled.div`
  margin: 10px 0px 5px 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.lg};
`

export const Category = styled.div`
  margin: 10px 0px 5px 5px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fonts.poppins};
`