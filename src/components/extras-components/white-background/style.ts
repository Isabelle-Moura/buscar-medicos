import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 3px 1px 22px #ecdef0;
  width: full-width;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin: -5px 12px 0px 12px;
  padding: 2px;
  padding: 12px 10px;
`