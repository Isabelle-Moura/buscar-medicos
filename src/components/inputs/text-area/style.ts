import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-top: 30px;
`

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.2px;
  position: absolute;
  line-height: 20px;
  top: -10px;
  left: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 5px;
`

export const Input = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: 145px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 9px;
  padding: 14px 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 15px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`