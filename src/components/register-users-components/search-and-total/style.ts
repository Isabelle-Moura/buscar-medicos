import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 650px;
`

export const Total = styled.div`
  margin-left: 15px;
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