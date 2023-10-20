import { Outlet } from 'react-router-dom'
import * as S from './style'
import LargeButtonArrow from '@/components/all-buttons/large-button-arrow'
import PageTitle from '@/components/titles-for-pages/title-page'

const UserProfilePage = () => {
  return (
    <>
      <PageTitle title="Edição de Perfil" />
      <S.Container>
        <S.ButtonsWrapper>
          <LargeButtonArrow name="Dados" link="dados" />
          <LargeButtonArrow name="Alterar senha" link="alterar-senha" />
          <LargeButtonArrow name="Administrar perfis" link="admins" />
        </S.ButtonsWrapper>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.Container>
    </>
  )
}

export default UserProfilePage
