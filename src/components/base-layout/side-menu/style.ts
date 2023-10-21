import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled.img`
  margin: 15px 30px;
  width: 150px;
`
export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  margin: 4px 7px;
  padding: 8px;
  border-radius: 10px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.midGreen};
    color: ${({ theme }) => theme.colors.defaultGreen};
  }
  &:focus-within {
    color: ${({ theme }) => theme.colors.defaultGreen};
    background: ${({ theme }) => theme.colors.midGreen};
  }
`

export const MenuItemName = styled.div`
  margin-left: 13px;
  padding: 5px 0px;
`

export const MenuBackground = styled.div`
  width: 230px;
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: all 0.3s;
`