import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xsm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.iconsColor.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`

export const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.poppins};
  margin-left: 10px;
`
export const TableContainer = styled.div`
  display: flex;
  gap: 730px;
  padding: 2px;
`

export const WhiteBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 3px 1px 30px #ecdef0;
  width: full-width;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin: 0px 15px;
  padding: 6px;
`