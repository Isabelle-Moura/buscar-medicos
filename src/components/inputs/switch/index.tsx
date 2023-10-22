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
   // Function called when toggling the switch
   const handleToggle = () => {
      if (onClick) {
         onClick(!checked); // Call the onClick function with the new switch state (inverts the value)
      }
   };

   return (
      <S.Switch>
         <S.HiddenCheckbox type="checkbox" checked={checked} onClick={handleToggle} /> {/* Hidden checkbox to control the switch state */}
         <S.Slider checked={checked} /> {/* Switch slider that moves based on state */}
         <S.Label>{label}</S.Label> {/* Label associated with the switch */}
      </S.Switch>
   );
};

export default CustomSwitch;
