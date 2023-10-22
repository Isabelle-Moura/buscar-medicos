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
            {link ? (
               <S.StyledLink to={link}>
                  <S.Icon src={SideArrow} />
               </S.StyledLink>
            ) : (
               <S.StyledButton onClick={onClick}>
                  <S.Icon src={SideArrow} />
               </S.StyledButton>
            )}
            <S.StyledTitle>{name}</S.StyledTitle>
         </S.ButtonAndTitleWrapper>
      </>
   );
};

export default BackToPageButton;
