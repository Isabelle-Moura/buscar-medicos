import styled from 'styled-components';

export const ModalWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5); /* Fundo escuro */
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 999;
`;

export const ModalContent = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   height: 70vh;
   width: 30vw;
   padding: 25px;
   border-radius: 8px;
`;
