import * as S from './style'
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  onClose:  () => void
}

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