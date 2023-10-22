// Special Type
import { ReactNode } from 'react';

// Style
import * as S from './style';

// Component Type
interface Props {
   children: ReactNode;
}

// ---

const WhiteBackground = ({ children }: Props) => {
   return (
      <>
         <S.Background>{children}</S.Background>
      </>
   );
};

export default WhiteBackground;
