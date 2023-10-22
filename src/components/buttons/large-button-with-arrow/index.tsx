import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import ArrowIcon from '../../../assets/icons/right.png';
import * as S from './style';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   name: string;
   link: string;
}

const LargeButtonArrow = ({ name, link }: Props) => {
   return (
      <>
         <S.StyledButton to={link}>
            {name} {/* Button text */}
            <img src={ArrowIcon} /> {/* Right arrow icon */}
         </S.StyledButton>
      </>
   );
};

export default LargeButtonArrow;
