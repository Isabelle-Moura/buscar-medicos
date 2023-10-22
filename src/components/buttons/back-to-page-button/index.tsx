// Icon
import SideArrow from '../../../assets/icons/back-left-arrow.png';

// Style
import * as S from './style';

// Component Type
interface Props {
   link?: string;
   onClick?: () => void;
   name: string;
}

// ---

const BackToPageButton = ({ link, name, onClick }: Props) => {
   return (
      <>
         <S.ButtonAndTitleWrapper>
            {link ? ( // If there is a link URL
               <S.StyledLink to={link}>
                  <S.Icon src={SideArrow} /> {/* Side arrow icon */}
               </S.StyledLink>
            ) : (
               // Otherwise, if there is a click function
               <S.StyledButton onClick={onClick}>
                  <S.Icon src={SideArrow} /> {/* Side arrow icon */}
               </S.StyledButton>
            )}
            <S.StyledTitle>{name}</S.StyledTitle> {/* Name to be displayed */}
         </S.ButtonAndTitleWrapper>
      </>
   );
};

export default BackToPageButton;
