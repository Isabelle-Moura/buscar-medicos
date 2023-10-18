// Style
import * as S from './style'

//Hooks
import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react'

// Components
import Input from '../../../components/inputs/input'
import ContentTitle from '../../../components/titles/content-title'
import WhiteBackground from '../../../components/extras-components/white-background'
import BackToPageButton from '../../../components/buttons/back-to-page-button'
import TextArea from '../../../components/inputs/text-area'

// Service
// import { getUserData } from '../../../services/users-service/config'

// ---

const UserDataPage = () => {
  const { state: allUserData } = useLocation();
  // const [userData, setUserData] = useState<UserData | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userData = await getUserData();
  //       setUserData(userData.content);
  //       console.log('Dados do usuário:', userData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Erro ao buscar dados do usuário:', error);
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchUserData();
  // }, [allUserData]); 

  // if (isLoading) {
  //   return <S.StyledH1>Carregando...</S.StyledH1>
  // }

  // if (!userData) {
  //   return <S.StyledH1>Nenhum dado do usuário foi encontrado.</S.StyledH1>
  // }

  return (
    <>
      <div style={{ backgroundColor: '#FCFCFC', width: '100%' }}>
        <div style={{ display: 'flex' }}>
          <BackToPageButton link="/usuarios-cadastrados" name="Usuário" />
        </div>
        <div>
          <WhiteBackground>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}>
              <ContentTitle title="Dados pessoais" />
              <S.DisplayAndMargin>
                <Input disabled id="firstName" placeholder="" defaultValue={allUserData.firstName} label="Primeiro Nome" width="large" />
                <Input disabled id="lastName" placeholder="" defaultValue={allUserData.lastName} label="Sobrenome" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="email" placeholder="" defaultValue={allUserData.email} label="E-mail" width="large" />
              </S.DisplayAndMargin>
              <ContentTitle title="Endereço" />
              <S.DisplayAndMargin>
                <Input disabled id="cep" placeholder="" defaultValue={allUserData.address.zipcode} label="CEP" width="large" />
                <Input disabled id="street" placeholder="" defaultValue={allUserData.address.street} label="Rua" width="large" />
                <Input disabled id="number" placeholder="" defaultValue={allUserData.address.number} label="Número" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="neighborhood" placeholder="" defaultValue={allUserData.address.neighborhood} label="Bairro" width="large" />
                <Input disabled id="city" placeholder="" defaultValue={allUserData.address.city} label="Cidade" width="large" />
                <Input disabled id="state" placeholder="" defaultValue={allUserData.address.state} label="Estado" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="plus" placeholder="" defaultValue={allUserData.address.complement} label="Complemento" width="large" />
              </S.DisplayAndMargin>
              <ContentTitle title="Dados do currículo" />
              <S.DisplayAndMargin>
                <Input disabled id="specialities" placeholder="" defaultValue={allUserData.specialties} label="Especialidades" width="large" />
                <Input disabled id="phone" placeholder="" defaultValue={allUserData.phone} label="Telefone" width="large" />
              </S.DisplayAndMargin>
              {/* Outros campos de dados do currículo */}
              <div style={{ marginTop: '10px' }}>
                <S.StyledText>Disponibilidade de dia e horário</S.StyledText>
              </div>
              <S.DisplayAndMargin>
                <TextArea disabled id="about" label="Sobre" placeholder='' />
                <TextArea disabled id="observation" label="Observação" placeholder=''/>
              </S.DisplayAndMargin>
              <ContentTitle title="Plano" />
              <S.StyledText>Plano X - R$200,00</S.StyledText>
            </div>
          </WhiteBackground>
        </div>
      </div>
    </>
  )
}

export default UserDataPage