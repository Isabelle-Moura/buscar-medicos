//Style
import * as S from './style'

//Hooks
import { useEffect, useState } from 'react'

//Icons
import MenuIcon from '../../../assets/icons/menu-bar.png'
import UserSettingsIcon from '../../../assets/icons/down-arrow.png'
import UserIcon from '../../../assets/icons/user.png'
import UserSettings from '../profile-settings'

// Service
import { UserMe } from '../../../services/login-service/config'

// Component Type
interface Props {
  toggleMenu: () => void 
}

// ---

const Header = ({ toggleMenu }: Props) => {
  const [userBackgroundVisible, setUserBackgroundVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await UserMe();
        if (response) {
          setName(response.firstName);
          setEmail(response.email);
        }
      } catch (error) {
        console.error('Ocorreu um erro!', error);
      }
    }
    fetchData();
  }, []);

  const toggleUserBackground = () => {
    setUserBackgroundVisible(!userBackgroundVisible);
  };

  return (
    <>
      <S.UserAndMenuIcon>
        <button onClick={toggleMenu} style={{ cursor: 'pointer', marginLeft: '5px', border: 'none', background: 'none' }}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <S.UserWrapper>
          <img src={UserIcon} style={{ marginRight: '10px' }} alt="User" />
          <S.UserDataWrapper>
            <S.UserName>{name}</S.UserName>
            <S.UserEmail>{email}</S.UserEmail>
          </S.UserDataWrapper>
          <div>
            <S.UserSettingsButton onClick={toggleUserBackground}>
              <img src={UserSettingsIcon} alt="User Settings" />
              {userBackgroundVisible && <UserSettings />}
            </S.UserSettingsButton>
          </div>
        </S.UserWrapper>
      </S.UserAndMenuIcon>
    </>
  );
};

export default Header;