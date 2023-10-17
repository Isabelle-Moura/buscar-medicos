// Style
import * as S from './style'

// Icons
import Logo from '../../../assets/images/logo-buscar-medicos.png'
import SmallLogo from '../../../assets/images/logo-sem-nome.png'
import DashboardIcon from '../../../assets/icons/dashboard.png'
import RegisterUsersIcon from '../../../assets/icons/register-users.png'
import PlansIcon from '../../../assets/icons/plans.png'
import SpecialitiesIcon from '../../../assets/icons/specialities.png'
import NotificationsIcon from '../../../assets/icons/notifications.png'
import FaqIcon from '../../../assets/icons/faq.png'

// Component Type
interface Props {
  className: 'open' | 'close'
  toggleMenu: () => void 
}

//---

const SideMenu = ({ className }: Props) => {
  return (
    <>
    { className === 'close' ? (
     <S.MenuBackground>
     <S.Logo src={SmallLogo} className='logo-small'/>
     <S.MenuItem to="/dashboard" className='menu-item-close'>
       <img src={DashboardIcon} />
     </S.MenuItem>
     <S.MenuItem to="/usuarios-cadastrados" className='menu-item-close'>
       <img src={RegisterUsersIcon} />
     </S.MenuItem>
     <S.MenuItem to="/planos" className='menu-item-close'>
       <img src={PlansIcon} />
     </S.MenuItem>
     <S.MenuItem to="/especialidades" className='menu-item-close'>
       <img src={SpecialitiesIcon} />
     </S.MenuItem>
     <S.MenuItem to="/notificacoes" className='menu-item-close'>
       <img src={NotificationsIcon} />
     </S.MenuItem>
     <S.MenuItem to="/faq" className='menu-item-close'>
       <img src={FaqIcon} />
     </S.MenuItem>
   </S.MenuBackground>
    ) : (
      <S.MenuBackground className={className}>
      <S.Logo src={Logo} className='logo-large'/>
      <S.MenuItem to="/dashboard" className='menu-item-open'>
        <img src={DashboardIcon} />
        <S.MenuItemName>Dashboard</S.MenuItemName>
      </S.MenuItem>
      <S.MenuItem to="/usuarios-cadastrados" className='menu-item-open'>
        <img src={RegisterUsersIcon} />
        <S.MenuItemName>Usuários Cadastrados</S.MenuItemName>
      </S.MenuItem>
      <S.MenuItem to="/planos" className='menu-item-open'>
        <img src={PlansIcon} />
        <S.MenuItemName>Planos</S.MenuItemName>
      </S.MenuItem>
      <S.MenuItem to="/especialidades" className='menu-item-open'>
        <img src={SpecialitiesIcon} />
        <S.MenuItemName>Especialidades</S.MenuItemName>
      </S.MenuItem>
      <S.MenuItem to="/notificacoes" className='menu-item-open'>
        <img src={NotificationsIcon} />
        <S.MenuItemName>Notificações</S.MenuItemName>
      </S.MenuItem>
      <S.MenuItem to="/faq" className='menu-item-open'>
        <img src={FaqIcon} />
        <S.MenuItemName>FAQ</S.MenuItemName>
      </S.MenuItem>
    </S.MenuBackground>
        

    )}
    </>
  )
}

export default SideMenu