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
   // Function called when confirming exclusion
   const handleConfirm = () => {
      onConfirm(itemId); // Call the onConfirm function with the item ID
   };

   return (
      <S.Container onClick={onClose}>
         <S.MessageBackground>
            <S.CloseTimes onClick={onCancel}>&times;</S.CloseTimes> {/* "X" button to close the delete confirmation */}
            <S.Message>
               Tem certeza que deseja <br />
               <u style={{ color: 'red' }}>excluir</u> este item?
            </S.Message>{' '}
            {/* Deletion confirmation message */}
            <div onClick={handleConfirm}>
               <MidButton name="Sim, excluir item." variant="DEFAULT" /> {/* Button "Yes, delete item." */}
            </div>
            <S.GoBackLink onClick={onCancel}>Voltar</S.GoBackLink> {/* Link to cancel deletion and return */}
         </S.MessageBackground>
      </S.Container>
   );
};

export default DeleteConfirmation;
