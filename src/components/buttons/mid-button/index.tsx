//Icon
import AddIcon from '../../../assets/icons/addicon.png';

// Style
import * as S from './style';

// Component Type
interface Props {
   name: string;
   onClick?: () => void;
   showIcon?: boolean;
   variant: 'DEFAULT' | 'CANCEL';
}

// ---

const MidButton = ({ name, onClick, showIcon, variant }: Props) => {
   return (
      <>
         <S.StyledButton variant={variant} onClick={onClick}>
            {showIcon && <S.PlusIcon src={AddIcon} />} {/* Plus icon (if showIcon is true) */}
            {name} {/* Button text */}
         </S.StyledButton>
      </>
   );
};

export default MidButton;
