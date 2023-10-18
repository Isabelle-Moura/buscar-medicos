import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 66vw;
`;

export const PageButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 1px;
  border-radius: 5px;
  border: none;
  padding: 3px;
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({theme}) => theme.colors.defaultGreen};
    color: ${({theme}) => theme.colors.white};
  }

  &:focus-within {
    background-color: ${({theme}) => theme.colors.defaultGreen};
    color: ${({theme}) => theme.colors.white};
  }
`;