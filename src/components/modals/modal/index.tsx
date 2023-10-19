// Style
import * as S from './style'

// Special Type
import { ReactNode } from 'react';

// Component Type
interface Props {
  children: ReactNode
  onClose:  () => void
}

// ---

const Modal = ({ onClose, children }: Props) => {
  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;