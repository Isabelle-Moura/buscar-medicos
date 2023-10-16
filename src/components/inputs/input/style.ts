import styled from 'styled-components'

export const Icon = styled.img`
  position: absolute;
  right: 25px;
  top: 50%;
  margin-top: -12px;
  cursor: pointer;

  .icon {
    width: 25px;
    height: 25px;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;

  &.error {
    input {
      border-color: ${({ theme }) => theme.iconsColor.red} !important;
      outline-color: ${({ theme }) => theme.iconsColor.red} !important;
    }
    label {
      color: ${({ theme }) => theme.iconsColor.red} !important;
    }
  }

  &.active {
    input {
      border-color: ${({ theme }) => theme.iconsColor.green} !important;
      outline-color: ${({ theme }) => theme.iconsColor.green} !important;
    }
    label {
      color: ${({ theme }) => theme.iconsColor.green} !important;
    }
  }
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

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 9px;
  padding: 14px 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.iconsColor.green};
    outline-color: ${({ theme }) => theme.iconsColor.green};

    ~ label {
      color: ${({ theme }) => theme.iconsColor.green};
    }
  }
`
