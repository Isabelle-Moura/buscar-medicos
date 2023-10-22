// Style
import * as S from './style';

//Hooks
import { useLocation } from 'react-router-dom';

// Components
import Input from '../../../components/inputs/input';
import ContentTitle from '../../../components/titles/content-title';
import WhiteBackground from '../../../components/extras-components/white-background';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import TextArea from '../../../components/inputs/text-area';

// ---

const UserDataPage = () => {
   const location = useLocation();
   const user = location.state?.user;

   const fullName = user.user || '';
   const [firstName, lastName] = fullName.split(' ');

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
                        <Input disabled id="firstName" placeholder="" defaultValue={firstName} label="Primeiro Nome" width="large" />
                        <Input disabled id="lastName" placeholder="" defaultValue={lastName} label="Sobrenome" width="large" />
                     </S.DisplayAndMargin>
                     <S.DisplayAndMargin>
                        <Input disabled id="email" placeholder="" defaultValue={user.email} label="E-mail" width="large" />
                        <Input disabled id="id" placeholder="" defaultValue={user.id} label="Id do Usuário" width="large" />
                     </S.DisplayAndMargin>
                     <ContentTitle title="Endereço" />
                     <S.DisplayAndMargin>
                        <Input disabled id="cep" placeholder="" defaultValue={user.zipcode ? user.zipcode : '-'} label="CEP" width="large" />
                        <Input disabled id="street" placeholder="" defaultValue={user.street ? user.street : '-'} label="Rua" width="large" />
                        <Input disabled id="number" placeholder="" defaultValue={user.number ? user.number : '-'} label="Número" width="large" />
                     </S.DisplayAndMargin>
                     <S.DisplayAndMargin>
                        <Input disabled id="neighborhood" placeholder="" defaultValue={user.neighborhood ? user.neighborhood : '-'} label="Bairro" width="large" />
                        <Input disabled id="city" placeholder="" defaultValue={user.city} label="Cidade" width="large" />
                        <Input disabled id="state" placeholder="" defaultValue={user.state} label="Estado" width="large" />
                     </S.DisplayAndMargin>
                     <S.DisplayAndMargin>
                        <Input disabled id="plus" placeholder="" defaultValue={user.complement ? user.complement : '-'} label="Complemento" width="large" />
                     </S.DisplayAndMargin>
                     <ContentTitle title="Dados do currículo" />
                     <S.DisplayAndMargin>
                        <Input disabled id="specialities" placeholder="" defaultValue={user.speciality} label="Especialidades" width="large" />
                        <Input disabled id="phone" placeholder="" defaultValue={user.whatsapp} label="Telefone" width="large" />
                        <Input disabled id="userType" placeholder="" defaultValue={user.userType} label="Tipo do Usuário" width="large" />
                     </S.DisplayAndMargin>
                     <S.DisplayAndMargin>
                        <TextArea disabled id="about" label="Sobre" placeholder="-" />
                        <TextArea disabled id="observation" label="Observação" placeholder="-" />
                     </S.DisplayAndMargin>
                     <ContentTitle title="Plano" />
                     <S.StyledText>Plano X - R$200,00</S.StyledText>
                  </div>
               </WhiteBackground>
            </div>
         </div>
      </>
   );
};

export default UserDataPage;
