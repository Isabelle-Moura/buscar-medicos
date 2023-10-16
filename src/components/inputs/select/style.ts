import styled from 'styled-components'
import Arrow from '../../../assets/icons/full-down-arrow.png'

export const SelectWrapper = styled.div`
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

export const Select = styled.select`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 9px;
  padding: 7px 20px 7px 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right center;
  width: 320px;

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