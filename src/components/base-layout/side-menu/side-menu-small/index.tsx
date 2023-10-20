// Style
import * as S from './style'; 

// Icons
import SmallLogo from '../../../../assets/images/logo-small.png';
import DashboardIcon from '../../../../assets/icons/dashboard.png';
import RegisterUsersIcon from '../../../../assets/icons/register-users.png';
import PlansIcon from '../../../../assets/icons/plans.png';
import SpecialitiesIcon from '../../../../assets/icons/specialities.png';
import NotificationsIcon from '../../../../assets/icons/notifications.png';
import FaqIcon from '../../../../assets/icons/faq.png';

// ---

const SideMenuSmall = () => {
  return (
    <S.MenuBackground>
      <S.Logo src={SmallLogo} />
      <S.Icons>
        <S.MenuItem to="/dashboard">
            <img src={DashboardIcon} alt="Dashboard" />
        </S.MenuItem>
        <S.MenuItem to="/usuarios-cadastrados">
            <img src={RegisterUsersIcon} alt="Usuários Cadastrados" />
        </S.MenuItem>
        <S.MenuItem to="/planos">
            <img src={PlansIcon} alt="Planos" />
        </S.MenuItem>
        <S.MenuItem to="/especialidades">
            <img src={SpecialitiesIcon} alt="Especialidades" />
        </S.MenuItem>
        <S.MenuItem to="/notificacoes">
            <img src={NotificationsIcon} alt="Notificações" />
        </S.MenuItem>
        <S.MenuItem to="/faq">
            <img src={FaqIcon} alt="FAQ" />
        </S.MenuItem>
      </S.Icons>
    </S.MenuBackground>
  );
}

export default SideMenuSmall;
