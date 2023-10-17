// Hooks
import { useNavigate } from 'react-router-dom'

//Components
import WhiteBackground from '../../components/extras-components/white-background'
import SearchInput from '../../components/inputs/search-bar'
import MidButton from '../../components/buttons/mid-button'
import FilterButton from '../../components/extras-components/filter-button'
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
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '-6px'}}>
              <SearchInput />
              <FilterButton />
            </div>
            <div style={{ margin: '10px 0px 10px 37.5vw'}} >
               <MidButton variant="DEFAULT" name="Nova Especialidade" onClick={() => navigate('/nova-especialidade')} showIcon={true} />
            </div>
        </div>

        <TableSpecialties />
      </WhiteBackground>
    </>
  )
}

export default SpecialitiesPage