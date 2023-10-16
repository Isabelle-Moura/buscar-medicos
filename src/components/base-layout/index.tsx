// Special Component
import { Outlet } from 'react-router-dom'

// Style
import * as S from './style'

//Hooks 
import { useState } from 'react'

// Components
import SideMenu from './side-menu'
import Header from './header'

// ---

const BaseLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <S.HeaderAndNavWrapper>
        <SideMenu className={menuOpen ? 'open' : 'close'} toggleMenu={toggleMenu} />

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