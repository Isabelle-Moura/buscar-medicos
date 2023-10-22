// Style
import * as S from './style';
import CheckImg from '../../../assets/icons/check-notification.png';

// Component Type
interface Props {
   message: string;
   onClose: () => void;
}

// ---

const ConfirmationPopUp = ({ message, onClose }: Props) => {
   return (
      <>
         {/* Click event on the container calls the onClose function to close the pop-up */}
         <S.Container onClick={onClose}>
            <S.ContentWrapper>
               <div onClick={onClose}>
                  {/* "X" button in the top right corner to close the pop-up */}
                  <S.Close>&times;</S.Close>
               </div>
               {/* Verification image (confirmation icon) */}
               <img src={CheckImg} width="180px" style={{ margin: '-60px 0px -30px 0px' }} />
               <S.Message>{message}</S.Message> {/* Confirmation or notification message */}
            </S.ContentWrapper>
         </S.Container>
      </>
   );
};

export default ConfirmationPopUp;
