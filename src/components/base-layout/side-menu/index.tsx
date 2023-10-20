// Style
import * as S from './style'

// Icons
import Logo from '../../../assets/images/logo-buscar-medicos.png'
// import SmallLogo from '../../../assets/images/logo-sem-nome.png'
import DashboardIcon from '../../../assets/icons/dashboard.png'
import RegisterUsersIcon from '../../../assets/icons/register-users.png'
import PlansIcon from '../../../assets/icons/plans.png'
import SpecialitiesIcon from '../../../assets/icons/specialities.png'
import NotificationsIcon from '../../../assets/icons/notifications.png'
import FaqIcon from '../../../assets/icons/faq.png'

// Component Type
// interface Props {
//   className: 'open' | 'close' { className }: Props
//   toggleMenu: () => void 
// }

//---

const SideMenu = () => {
  return (
    <>
    {/* { className === 'close' ? ( */}
     {/* <S.MenuBackground>
     <S.Logo src={SmallLogo}/>
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
   </S.MenuBackground> */}
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
  )
}

export default SideMenu