import styled from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  border: none;
  padding: 3px;
  box-shadow: 0px 0px 12px lightgray;
  margin-left: 10px;
`

export const StyledTooltip = styled.img`
  position: absolute;
  top: -100%;
  left: 65%;
  transform: translateX(-50%) translateY(-40%);
  z-index: 1;
`