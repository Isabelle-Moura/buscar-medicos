import styled from 'styled-components'

export const Button = styled.button<{ variant: 'DEFAULT' | 'CANCEL' }>`
  color: ${({ theme, variant }) => (variant === 'DEFAULT' ? theme.colors.white : theme.colors.red)};
  background-color: ${({ theme, variant }) => (variant === 'DEFAULT' ? theme.colors.defaultGreen : theme.colors.white)};
  border-color: ${({ theme, variant }) => (variant === 'DEFAULT' ? 'none' : theme.colors.red)};
  border: ${({ variant }) => (variant === 'DEFAULT' ? 'none' : '2px solid')};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  height: 45px;
  letter-spacing: 0.5;
  border-radius: 9px;
  width: 320px;
  padding: 14px 16px;
  outline: none;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ variant }) => (variant === 'DEFAULT' ? '#024727' : '#F1F1F1')};
  }
`
