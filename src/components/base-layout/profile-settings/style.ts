import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Background = styled.img`
  position: absolute;
  top: 20px;
  right: 0px;
  margin-right: 0;
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 70px;
  right: 40px;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  gap: 10px;
  align-items: flex-start;
  padding: 20px;
`

export const HR = styled.hr`
  border: 1px solid #eeeeee;
  width: 170px;
`