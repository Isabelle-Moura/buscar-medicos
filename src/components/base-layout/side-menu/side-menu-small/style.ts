import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.img`
  margin: 15px 23px;
  width: 55px;
`

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSize.xsm};
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  color: ${({ theme }) => theme.colors.white};
  margin: 1px;
  padding: 15px 23px;
  border-radius: 10px;
  text-decoration: none;

  &:hover, &:focus-within  {
    background: ${({ theme }) => theme.colors.midGreen};
    color: ${({ theme }) => theme.colors.defaultGreen};
  }
`

export const MenuBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 100px;
  transition: all 2.9s;
`
