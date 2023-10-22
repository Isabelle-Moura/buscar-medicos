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
         <S.Container onClick={onClose}>
            <S.ContentWrapper>
               <div onClick={onClose}>
                  <S.Close>&times;</S.Close>
               </div>
               <img src={CheckImg} width="180px" style={{ margin: '-60px 0px -30px 0px' }} />
               <S.Message>{message}</S.Message>
            </S.ContentWrapper>
         </S.Container>
      </>
   );
};

export default ConfirmationPopUp;
