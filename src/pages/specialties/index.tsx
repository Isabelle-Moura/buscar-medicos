// Hooks
import { useNavigate } from 'react-router-dom';

//Components
import WhiteBackground from '../../components/extras-components/white-background';
import MidButton from '../../components/buttons/mid-button';
import PageTitle from '../../components/titles/page-title';
import TableSpecialties from '../../components/tables/table-specialties';

// ---

const SpecialitiesPage = () => {
   const navigate = useNavigate();

   return (
      <>
         <PageTitle title="Especialidades" />
         <WhiteBackground>
            <div style={{ margin: '-2px 0px -20px 62.3vw' }}>
               <MidButton variant="DEFAULT" name="Nova Especialidade" onClick={() => navigate('/nova-especialidade')} showIcon={true} />
            </div>
            <TableSpecialties />
         </WhiteBackground>
      </>
   );
};

export default SpecialitiesPage;
