// Components
import MidButton from '../../buttons/mid-button';

// Style
import * as S from './style';

// Component Type
interface Props {
   onCancel: () => void;
   onClose: () => void;
   onConfirm: (itemId: number | null) => Promise<void>;
   itemId: number | null;
}

// ---

const DeleteConfirmation = ({ onCancel, onConfirm, itemId, onClose }: Props) => {
   const handleConfirm = () => {
      onConfirm(itemId);
   };

   return (
      <S.Container onClick={onClose}>
         <S.MessageBackground>
            <S.CloseTimes onClick={onCancel}>&times;</S.CloseTimes>
            <S.Message>
               Tem certeza que deseja <br />
               <u style={{ color: 'red' }}>excluir</u> este item?
            </S.Message>
            <div onClick={handleConfirm}>
               <MidButton name="Sim, excluir item." variant="DEFAULT" />
            </div>
            <S.GoBackLink onClick={onCancel}>Voltar</S.GoBackLink>
         </S.MessageBackground>
      </S.Container>
   );
};

export default DeleteConfirmation;
