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
         <S.Logo src={SmallLogo} /> {/* Small logo */}
         <S.Icons>
            <S.MenuItem to="/dashboard">
               <img src={DashboardIcon} alt="Dashboard" /> {/* Dashboard icon */}
            </S.MenuItem>
            <S.MenuItem to="/usuarios-cadastrados">
               <img src={RegisterUsersIcon} alt="Registered Users" /> {/* Icon of registered users */}
            </S.MenuItem>
            <S.MenuItem to="/plans">
               <img src={PlansIcon} alt="Plans" /> {/* Plans icon */}
            </S.MenuItem>
            <S.MenuItem to="/specialidades">
               <img src={SpecialitiesIcon} alt="Specialties" /> {/* Specialties icon */}
            </S.MenuItem>
            <S.MenuItem to="/notifications">
               <img src={NotificationsIcon} alt="Notifications" /> {/* Notifications icon */}
            </S.MenuItem>
            <S.MenuItem to="/faq">
               <img src={FaqIcon} alt="FAQ" /> {/* FAQ icon */}
            </S.MenuItem>
         </S.Icons>
      </S.MenuBackground>
   );
};

export default SideMenuSmall;
