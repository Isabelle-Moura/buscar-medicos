// Style
import * as S from './style';

// Hooks
import { useState, MouseEvent } from 'react';

// Component Type
interface Props {
   icon: string;
   tooltip: string;
   hover: string;
   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

// ---

const IconAndTooltipButton = ({ icon, tooltip, hover, onClick }: Props) => {
   const [isTooltipVisible, setIsTooltipVisible] = useState(false);

   const handleMouseOver = () => {
      setIsTooltipVisible(true);
   };

   const handleMouseOut = () => {
      setIsTooltipVisible(false);
   };

   const dynamicStyle = {
      backgroundColor: isTooltipVisible ? hover : 'transparent',
   };

   return (
      <>
         <div style={{ position: 'relative' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <S.StyledButton style={{ ...dynamicStyle }} onClick={onClick}>
               <img src={icon} alt="Icon" />
               {isTooltipVisible && <S.StyledTooltip src={tooltip} alt="Tooltip" />}
            </S.StyledButton>
         </div>
      </>
   );
};

export default IconAndTooltipButton;
