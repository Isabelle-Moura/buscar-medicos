import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Link)`
   font-family: ${({ theme }) => theme.fonts.poppins};
   font-weight: ${({ theme }) => theme.fontWeight.bold};
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 5px 10px;
   padding: 0px 15px;
   background-color: ${({ theme }) => theme.colors.lightGray};
   width: 250px;
   height: 40px;
   color: ${({ theme }) => theme.colors.white};
   border: none;
   border-radius: 10px;
   text-decoration: none;
   &:focus {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      background-color: ${({ theme }) => theme.colors.defaultGreen};
      color: ${({ theme }) => theme.colors.white};
   }
   &:hover {
      background-color: ${({ theme }) => theme.colors.defaultGreen};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.secondWhite};
   }
`;
