import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  `

export const Total = styled.div`
  position: relative;
  top: 2px;
  left: 69vw;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.colors.black};
  p {
    font-size: ${({ theme }) => theme.fontSize.xsm};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: ${({ theme }) => theme.fontWeight.midBold};
  }
`