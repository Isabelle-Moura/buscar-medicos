// Style
import * as S from './style';

// Special Type
import { ReactNode } from 'react';

// Component Type
interface Props {
   children: ReactNode;
   onClose: () => void;
}

// ---

const Modal = ({ onClose, children }: Props) => {
   return (
      <S.ModalWrapper onClick={onClose}>
         {/* Is a function in JS used to prevent a multiplication event from continuing to spread through the DOM element hierarchy */}
         <S.ModalContent onClick={(e) => e.stopPropagation()}>{children}</S.ModalContent>
      </S.ModalWrapper>
   );
};

export default Modal;
