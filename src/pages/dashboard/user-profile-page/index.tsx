import { Outlet } from 'react-router-dom';
import * as S from './style';
import PageTitle from '../../../components/titles/page-title';
import LargeButtonArrow from '../../../components/buttons/large-button-with-arrow';

const UserProfilePage = () => {
   return (
      <>
         <PageTitle title="Edição de Perfil" />
         <S.Container>
            <S.ButtonsWrapper>
               <LargeButtonArrow name="Dados" link="dados" />
               <LargeButtonArrow name="Visualizar perfis" link="visualizar-perfis" />
            </S.ButtonsWrapper>
            <S.Main style={{ marginLeft: '15px' }}>
               <Outlet />
            </S.Main>
         </S.Container>
      </>
   );
};

export default UserProfilePage;
