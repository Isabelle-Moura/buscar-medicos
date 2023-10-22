// Special Component
import { Outlet } from 'react-router-dom';

// Style
import * as S from './style';

//Hooks
import { useState } from 'react';

// Components
import SideMenu from './side-menu';
import Header from './header';
import SideMenuSmall from './side-menu/side-menu-small';

// ---

const BaseLayout = () => {
   // State to control opening/closing of the menu
   const [menuOpen, setMenuOpen] = useState(true);

   // Function to toggle menu visibility
   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <>
         <S.HeaderAndNavWrapper>
            {/* Render the SideMenu or SideMenuSmall based on the menu state */}
            {menuOpen ? <SideMenu /> : <SideMenuSmall />}
            <S.UserAndMainWrapper>
               {/* Header component with menu toggle function */}
               <Header toggleMenu={toggleMenu} />

               <S.Main>
                  {/* Render nested routes using Outlet */}
                  <Outlet />
               </S.Main>
            </S.UserAndMainWrapper>
         </S.HeaderAndNavWrapper>
      </>
   );
};

export default BaseLayout;
