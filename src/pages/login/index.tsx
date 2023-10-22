//Style
import * as S from './style';

//Page Service
import { LoginService } from '../../services/login-service/config';

//Components
import LargeButton from '../../components/buttons/large-button';
import Input from '../../components/inputs/input';

//Icons
import EyeIcon from '../../assets/icons/visualize.png';
import EyeSlashIcon from '../../assets/icons/eye-slash.png';

//Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ---

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [className, setClassName] = useState('');

   const navigate = useNavigate();

   const handleSubmit = async () => {
      const response = await LoginService(email, password);
      if (response?.success && email === 'admin@email.com' && password === 'Teste@123') {
         setClassName('active');
         navigate('/dashboard');
      } else {
         setClassName('error');
      }
   };

   return (
      <>
         <S.ScreenBackground>
            <S.WhiteBackground>
               <S.ContentWrapper>
                  <S.TitleWrapper>
                     <S.WelcomeTitle>Seja bem-vindo(a)!</S.WelcomeTitle>
                     <S.Title>Realize seu Login</S.Title>
                  </S.TitleWrapper>
                  <div>
                     <Input
                        value={email}
                        isWrong={className === 'error'}
                        label="E-mail"
                        type="email"
                        id="email"
                        placeholder="Insira seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        width="large"
                     />
                     <Input
                        value={password}
                        isWrong={className === 'error'}
                        label="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="Insira sua senha"
                        icon={showPassword ? EyeIcon : EyeSlashIcon}
                        onIcon={() => setShowPassword(!showPassword)}
                        width="large"
                     />
                     <S.CheckAndForgetWrapper>
                        <S.CheckboxWrapper>
                           <input type="checkbox" />
                           <S.RememberMe>Lembrar-me</S.RememberMe>
                        </S.CheckboxWrapper>
                        <S.ForgotMyPassword to="esqueci-minha-senha">Esqueci minha senha</S.ForgotMyPassword>
                     </S.CheckAndForgetWrapper>
                     <LargeButton variant="DEFAULT" name="Entrar" type="button" onClick={handleSubmit} />
                  </div>
               </S.ContentWrapper>
            </S.WhiteBackground>
         </S.ScreenBackground>
      </>
   );
};

export default LoginPage;
