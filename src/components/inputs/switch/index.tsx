// Style
import * as S from './style';

// Component Type
interface Props {
   label: string;
   checked: boolean;
   onClick?: (checked: boolean) => void;
}

// ---

const CustomSwitch = ({ label, checked, onClick }: Props) => {
   const handleToggle = () => {
      if (onClick) {
         onClick(!checked);
      }
   };

   return (
      <S.Switch>
         <S.HiddenCheckbox type="checkbox" checked={checked} onClick={handleToggle} />
         <S.Slider checked={checked} />
         <S.Label>{label}</S.Label>
      </S.Switch>
   );
};

export default CustomSwitch;
