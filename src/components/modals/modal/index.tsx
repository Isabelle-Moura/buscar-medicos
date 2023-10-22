// Style
import * as S from './style';

// Special Type
import { ReactNode } from 'react';

// Component Type
interface Props {
   children: ReactNode; // React Node: is the same as we say "React Element"
   onClose: () => void;
}

// ---

const Modal = ({ onClose, children }: Props) => {
   return (
      <S.ModalWrapper onClick={onClose}>
         {/* Click event on the modal wrapper calls the onClose function to close the modal */}
         <S.ModalContent onClick={(e) => e.stopPropagation()}>{children}</S.ModalContent>
         {/* Click event on modal content prevents propagation of the event to the modal wrapper */}
      </S.ModalWrapper>
   );
};

export default Modal;
