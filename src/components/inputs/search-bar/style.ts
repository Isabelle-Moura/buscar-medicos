import styled from 'styled-components'

export const Input = styled.input`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.poppins};
  width: 270px;
  height: 38px;
  margin-left: 5px;
  padding: 15px 10px;
  border-radius: 7px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-right: 10px;
`
export const Icon = styled.img`
  width: 20px;
  position: absolute;
  margin-left: -40px;
  margin-top: 8px;
`