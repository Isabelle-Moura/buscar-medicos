// Special Component
import { Outlet } from 'react-router-dom'

// Style
import * as S from './style'

//Hooks 
import { useState } from 'react'

// Components
import SideMenu from './side-menu'
import Header from './header'
import SideMenuSmall from './side-menu/side-menu-small'

// ---

const BaseLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true) 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <S.HeaderAndNavWrapper>
        {menuOpen ? <SideMenu /> : <SideMenuSmall/>}
        {/* <SideMenu className={menuOpen ? } toggleMenu={toggleMenu} /> */}

        {/* Header and Main.  */}
        <S.UserAndMainWrapper>
          <Header toggleMenu={toggleMenu} />

          <S.Main>
            <Outlet />
          </S.Main>
        </S.UserAndMainWrapper>
      </S.HeaderAndNavWrapper>
    </>
  )
}

export default BaseLayout