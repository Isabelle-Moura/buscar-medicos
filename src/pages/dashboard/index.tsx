//Style
import * as S from './style';

//Components
import Greetings from '../../components/dashboard-comps/page-greetings';
import Cards from '../../components/dashboard-comps/three-cards';
import TableDashboard from '../../components/tables/table-dashboard';

//Icons
import RightArrowBlueIcon from '../../assets/icons/blue-right-arrow.png';

// ---

const DashboardPage = () => {
   return (
      <>
         <div>
            <S.DisplayFlex>
               <Greetings />
               <Cards />
            </S.DisplayFlex>

            <S.WhiteBackground>
               <S.TableContainer>
                  <S.ContentTitle>Último usuários cadastrados</S.ContentTitle>
                  <S.StyledLink to="/usuarios-cadastrados">
                     Ver tudo <img src={RightArrowBlueIcon} width="20px" />
                  </S.StyledLink>
               </S.TableContainer>

               <TableDashboard />
            </S.WhiteBackground>
         </div>
      </>
   );
};

export default DashboardPage;
