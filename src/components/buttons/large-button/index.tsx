// Style
import * as S from './style';

// Component Type
interface Props {
   name: string;
   type: 'button' | 'submit';
   variant: 'DEFAULT' | 'CANCEL';
   onClick?: () => void;
}

// ---

const LargeButton = ({ name, type, variant, onClick }: Props) => {
   return (
      <S.Button variant={variant} type={type} onClick={onClick}>
         {name} {/* Button text */}
      </S.Button>
   );
};

export default LargeButton;
