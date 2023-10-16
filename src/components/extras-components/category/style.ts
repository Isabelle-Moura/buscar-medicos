import styled from 'styled-components'

export const StyledName = styled.span`
  margin: 5px 0px 5px 10px;
  margin-right: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

export const StyledTotal = styled.div`
  border-radius: 10px;
  padding: 0px 6px;
  letter-spacing: 0.3px;
  width: fit-content;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.midGreen};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.fontWeight.middle};
`

export const Container = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.poppins};
  align-items: center;
  margin: 5px;
  justify-content: flex-start;
  min-width: fit-content;
  padding: 0px 5px;
  cursor: pointer;
  min-height: 40px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ theme }) => theme.colors.secondWhite};

  &:focus-within, &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -1px 5px lightgray;
    .active-name {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    .active-total {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.defaultGreen};
      font-size: ${({ theme }) => theme.fontSize.xsm};
      font-weight: ${({ theme }) => theme.fontWeight.middle};
    }
  }
`