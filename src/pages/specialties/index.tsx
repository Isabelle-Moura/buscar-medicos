// Hooks
import { useNavigate } from 'react-router-dom'

//Components
import WhiteBackground from '../../components/extras-components/white-background'
import SearchInput from '../../components/inputs/search-bar'
import MidButton from '../../components/buttons/mid-button'
import PageTitle from '../../components/titles/page-title'
import TableSpecialties from '../../components/tables/table-specialties'

// ---

const SpecialitiesPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <PageTitle title="Especialidades" />
      <WhiteBackground>
        <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-2px 0px 10px 0px'}}>
              <SearchInput />
            </div>
            <div style={{ margin: '1px 0px 8px 41.5vw'}} >
               <MidButton variant="DEFAULT" name="Nova Especialidade" onClick={() => navigate('/nova-especialidade')} showIcon={true} />
            </div>
        </div>
        <TableSpecialties />
      </WhiteBackground>
    </>
  )
}

export default SpecialitiesPage