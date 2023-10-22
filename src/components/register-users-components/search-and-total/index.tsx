// Style
import * as S from './style';

// Component Type
interface Props {
   counter: number;
}

// ---

const SearchAndTotal = ({ counter }: Props) => {
   return (
      <>
         <S.Container>
            <S.Total>
               Total de usuários <br /> <b>{counter}</b> {/* To display counter number */}
            </S.Total>
         </S.Container>
      </>
   );
};

export default SearchAndTotal;
