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
         {/* Side menu background */}
         <S.MenuBackground>
            <S.Logo src={Logo} /> {/* Application logo */}
            <S.MenuItem to="/dashboard">
               <img src={DashboardIcon} /> {/* Dashboard icon */}
               <S.MenuItemName>Dashboard</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
            <S.MenuItem to="/usuarios-cadastrados">
               <img src={RegisterUsersIcon} /> {/* Registered users icon */}
               <S.MenuItemName>Usuários Cadastrados</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
            <S.MenuItem to="/planos">
               <img src={PlansIcon} /> {/* Plans icon */}
               <S.MenuItemName>Planos</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
            <S.MenuItem to="/especialidades">
               <img src={SpecialitiesIcon} /> {/* Specialties icon */}
               <S.MenuItemName>Especialidades</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
            <S.MenuItem to="/notificacoes">
               <img src={NotificationsIcon} /> {/* Notifications icon */}
               <S.MenuItemName>Notificações</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
            <S.MenuItem to="/faq">
               <img src={FaqIcon} /> {/* FAQ icon */}
               <S.MenuItemName>FAQ</S.MenuItemName> {/* Menu item name */}
            </S.MenuItem>
         </S.MenuBackground>
      </>
   );
};

export default SideMenu;
