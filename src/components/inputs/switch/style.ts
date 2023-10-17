import styled from 'styled-components'

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`

export const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.checked ? '#00c247' : '#ff3333')};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: ${props => (props.checked ? '22px' : '2px')};
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const Label = styled.span`
  position: absolute;
  bottom: 0;
  left: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.poppins};
`

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`