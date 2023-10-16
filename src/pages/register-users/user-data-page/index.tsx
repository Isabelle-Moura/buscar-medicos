// Style
import * as S from './style'

//Hooks
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'

// Components
import Input from '../../../components/inputs/input'
import ContentTitle from '../../../components/titles/content-title'
import WhiteBackground from '../../../components/extras-components/white-background'
import BackToPageButton from '../../../components/buttons/back-to-page-button'
import TextArea from '../../../components/inputs/text-area'

// Service
import { getUserData } from '../../../services/users-service/config'

// ---

const UserDataPage = () => {
    const location = useLocation();
    
    let userId: number;
    if (location.state && location.state.userId) {
      userId = location.state.userId;
    } 

  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
        try {
          const userData = await getUserData(userId);
          setUserData(userData.content);
          console.log('Dados do usuário:', userData);
          setIsLoading(false);
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
          setIsLoading(false);
        }
      }

    fetchUserData()
  }, [location])

  if (isLoading) {
    return <S.StyledH1>Carregando...</S.StyledH1>
  }

  if (!userData) {
    return <S.StyledH1>Nenhum dado do usuário foi encontrado.</S.StyledH1>
  }

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
                <Input disabled id="firstName" placeholder="" defaultValue={userData.firstName} label="Primeiro Nome" width="large" />
                <Input disabled id="lastName" placeholder="" defaultValue={userData.lastName} label="Sobrenome" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="email" placeholder="" defaultValue={userData.email} label="E-mail" width="large" />
              </S.DisplayAndMargin>
              <ContentTitle title="Endereço" />
              <S.DisplayAndMargin>
                <Input disabled id="cep" placeholder="" defaultValue={userData.address.zipcode} label="CEP" width="large" />
                <Input disabled id="street" placeholder="" defaultValue={userData.address.street} label="Rua" width="large" />
                <Input disabled id="number" placeholder="" defaultValue={userData.address.number} label="Número" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="neighborhood" placeholder="" defaultValue={userData.address.neighborhood} label="Bairro" width="large" />
                <Input disabled id="city" placeholder="" defaultValue={userData.address.city} label="Cidade" width="large" />
                <Input disabled id="state" placeholder="" defaultValue={userData.address.state} label="Estado" width="large" />
              </S.DisplayAndMargin>
              <S.DisplayAndMargin>
                <Input disabled id="plus" placeholder="" defaultValue={userData.address.complement} label="Complemento" width="large" />
              </S.DisplayAndMargin>
              <ContentTitle title="Dados do currículo" />
              <S.DisplayAndMargin>
                <Input disabled id="specialities" placeholder="" defaultValue={userData.specialties} label="Especialidades" width="large" />
                <Input disabled id="phone" placeholder="" defaultValue={userData.phone} label="Telefone" width="large" />
              </S.DisplayAndMargin>
              {/* Outros campos de dados do currículo */}
              <div style={{ marginTop: '10px' }}>
                <S.StyledText>Disponibilidade de dia e horário</S.StyledText>
              </div>
              <S.DisplayAndMargin>
                <TextArea disabled id="about" label="Sobre" />
                <TextArea disabled id="observation" label="Observação"/>
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