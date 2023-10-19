import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 66vw;
`;

export const ArrowsButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
  padding: 3px;
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-family: ${({theme}) => theme.fonts.poppins};
  outline: none;
  transition: background-color 0.2s, color 0.2s;
`

export const PageButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
  padding: 3px;
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-family: ${({theme}) => theme.fonts.poppins};
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s, color 0.2s;

  &:hover, :focus-within, :active {
    font-weight: ${({theme}) => theme.fontWeight.bold};
    background-color: ${({theme}) => theme.colors.defaultGreen};
    color: ${({theme}) => theme.colors.white};
  }
`;