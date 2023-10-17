import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled.img`
  margin: 15px 30px;
`
export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  margin: 5px;
  padding: 10px;
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
`

export const MenuBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: all 0.3s;

  &.open {
    width: 17%;
    
    .logo-large {
      width: 60%;
    }
    
    .menu-item-open {
       justify-content: flex-start;
    }
  }

  &.close {
    width: 10%;

    .logo-small {
        width: 60%;
    }
    
    .menu-item-close {
        justify-content: center;
  }
  }
`