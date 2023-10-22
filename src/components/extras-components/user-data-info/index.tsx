import { ReactNode } from 'react';
import * as S from './style';

interface Props {
   infoTitle: string;
   infoContent: string;
   button?: ReactNode;
   scndButton?: ReactNode;
}

const UserDataInfo = ({ infoTitle, infoContent, button, scndButton }: Props) => {
   return (
      <>
         <S.Container>
            <S.InfoName>{infoTitle}</S.InfoName>
            <S.InfoContent>{infoContent}</S.InfoContent>
            <S.ButtonsWrapper>
               <div>{button}</div>
               <div>{scndButton}</div>
            </S.ButtonsWrapper>
         </S.Container>
         <S.Hr />
      </>
   );
};

export default UserDataInfo;
