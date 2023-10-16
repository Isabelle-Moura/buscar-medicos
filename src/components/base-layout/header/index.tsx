//Style
import * as S from './style'

//Hooks
import { useState } from 'react'

//Icons
import MenuIcon from '../../../assets/icons/menu-bar.png'
import UserSettingsIcon from '../../../assets/icons/down-arrow.png'
import UserIcon from '../../../assets/icons/user.png'
import UserSettings from '../profile-settings'

// Component Type
interface Props {
  toggleMenu: () => void 
}

// ---

const Header = ({ toggleMenu }: Props) => {
  const [userBackgroundVisible, setUserBackgroundVisible] = useState(false)

  const toggleUserBackground = () => {
    setUserBackgroundVisible(!userBackgroundVisible)
  }

  return (
    <>
      <S.UserAndMenuIcon>
        <button onClick={toggleMenu} style={{ cursor: 'pointer', marginLeft: '5px', border: 'none', background: 'none' }}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <S.UserWrapper>
          <img src={UserIcon} style={{ marginRight: '10px' }} alt="User" />
          <S.UserDataWrapper>
            {/* User Data */}
            <S.UserName>Izabel</S.UserName>
            <S.UserEmail>izabel@gmail.com</S.UserEmail>
          </S.UserDataWrapper>
          <div>
            <S.UserSettingsButton onClick={toggleUserBackground}>
              <img src={UserSettingsIcon} alt="User Settings" />
              {/* If userBackground is visible, then the user settings will be too. */}
              {userBackgroundVisible && <UserSettings />} 
            </S.UserSettingsButton>
          </div>
        </S.UserWrapper>
      </S.UserAndMenuIcon>
    </>
  )
}

export default Header