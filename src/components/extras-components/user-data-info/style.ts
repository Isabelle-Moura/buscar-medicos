import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
   display: flex;
`;

export const InfoName = styled.div`
   color: ${({ theme }) => theme.colors.black};
   font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const InfoContent = styled.div`
   text-align: left;
   color: ${({ theme }) => theme.colors.gray};
`;
export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px;
   width: 550px;
   font-family: ${({ theme }) => theme.fonts.poppins};
   margin-left: 5px;
`;
export const Hr = styled.hr`
   border: 0.5px solid #d3d3d3;
   max-width: 550px;
`;
