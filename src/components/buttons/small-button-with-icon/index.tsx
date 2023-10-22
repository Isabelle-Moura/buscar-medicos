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
   // State to control tooltip visibility
   const [isTooltipVisible, setIsTooltipVisible] = useState(false);

   // Handle the mouse over button event
   const handleMouseOver = () => {
      setIsTooltipVisible(true); // Makes the tooltip visible when hovering over the button
   };

   // Handle mouse off button event
   const handleMouseOut = () => {
      setIsTooltipVisible(false); // Hides the tooltip when removing the mouse from the button
   };

   // Dynamic style for the button (changes the background color if the tooltip is visible)
   const dynamicStyle = {
      backgroundColor: isTooltipVisible ? hover : 'transparent',
   };

   return (
      <>
         <div style={{ position: 'relative' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <S.StyledButton style={{ ...dynamicStyle }} onClick={onClick}>
               <img src={icon} alt="Icon" /> {/* Button icon */}
               {isTooltipVisible && <S.StyledTooltip src={tooltip} alt="Tooltip" />} {/* Tooltip (if visible) */}
            </S.StyledButton>
         </div>
      </>
   );
};

export default IconAndTooltipButton;
