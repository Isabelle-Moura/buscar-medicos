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
            <S.InfoName>{infoTitle}</S.InfoName> {/* Information title */}
            <S.InfoContent>{infoContent}</S.InfoContent> {/* Information content */}
            <S.ButtonsWrapper>
               <div>{button}</div> {/* Button (if provided) */}
               <div>{scndButton}</div> {/* Second button (if provided) */}
            </S.ButtonsWrapper>
         </S.Container>
         <S.Hr /> {/* Horizontal line to separate information */}
      </>
   );
};

export default UserDataInfo;
