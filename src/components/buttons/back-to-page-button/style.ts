import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonAndTitleWrapper = styled.div`
  display: flex;
  margin: 20px 0px 20px 30px;
`
export const StyledLink = styled(Link)`
  width: 35px;
  height: 35px;
  background-color: lightgray;
  border-radius: 25px;
  &:hover {
    background-color: #aaa9a9;
  }
`

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 5px;
  font-family: ${({ theme }) => theme.fonts.sora};
`

export const Icon = styled.img`
  padding: 5px;
`