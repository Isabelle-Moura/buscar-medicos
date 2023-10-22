// Style
import * as S from './style';

// Component Type
interface Props {
   title: string;
}

// ---

const ContentTitle = ({ title }: Props) => {
   return (
      <>
         <S.StyledTitle>{title}</S.StyledTitle>
      </>
   );
};

export default ContentTitle;
