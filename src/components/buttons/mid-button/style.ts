import styled from 'styled-components'

export const StyledButton = styled.button<{ variant: 'DEFAULT' | 'CANCEL' }>`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) => (variant === 'DEFAULT' ? theme.colors.neonGreen : theme.colors.red)};
  cursor: pointer;
  min-width: 210px;
  height: 45px;
  border: none;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ variant }) => (variant === 'DEFAULT' ? '#078c35' : 'gray')};
  }
`

export const PlusIcon = styled.img`
  width: 22px;
  margin-right: 15px;
`