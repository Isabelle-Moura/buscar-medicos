// Style
import * as S from './style';

// Icons
import Logo from '../../../assets/images/logo-buscar-medicos.png';
import DashboardIcon from '../../../assets/icons/dashboard.png';
import RegisterUsersIcon from '../../../assets/icons/register-users.png';
import PlansIcon from '../../../assets/icons/plans.png';
import SpecialitiesIcon from '../../../assets/icons/specialities.png';
import NotificationsIcon from '../../../assets/icons/notifications.png';
import FaqIcon from '../../../assets/icons/faq.png';

//---

const SideMenu = () => {
   return (
      <>
         <S.MenuBackground>
            <S.Logo src={Logo} />
            <S.MenuItem to="/dashboard">
               <img src={DashboardIcon} />
               <S.MenuItemName>Dashboard</S.MenuItemName>
            </S.MenuItem>
            <S.MenuItem to="/usuarios-cadastrados">
               <img src={RegisterUsersIcon} />
               <S.MenuItemName>Usuários Cadastrados</S.MenuItemName>
            </S.MenuItem>
            <S.MenuItem to="/planos">
               <img src={PlansIcon} />
               <S.MenuItemName>Planos</S.MenuItemName>
            </S.MenuItem>
            <S.MenuItem to="/especialidades">
               <img src={SpecialitiesIcon} />
               <S.MenuItemName>Especialidades</S.MenuItemName>
            </S.MenuItem>
            <S.MenuItem to="/notificacoes">
               <img src={NotificationsIcon} />
               <S.MenuItemName>Notificações</S.MenuItemName>
            </S.MenuItem>
            <S.MenuItem to="/faq">
               <img src={FaqIcon} />
               <S.MenuItemName>FAQ</S.MenuItemName>
            </S.MenuItem>
         </S.MenuBackground>
      </>
   );
};

export default SideMenu;
