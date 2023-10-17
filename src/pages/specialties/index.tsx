// Hooks
import { useNavigate } from 'react-router-dom'

// Icons
import VisualizeIcon from '../../assets/icons/visualize.png'
import VisualizeToolTip from '../../assets/icons/visualizeTooltip.png'
import RemoveIcon from '../../assets/icons/delete.png'
import RemoveToolTip from '../../assets/icons/removeTooltip.png'
import EditIcon from '../../assets/icons/edit.png'
import EditToolTip from '../../assets/icons/editTooltip.png'

//Components
import WhiteBackground from '../../components/extras-components/white-background'
import SearchInput from '../../components/inputs/search-bar'
import MidButton from '../../components/buttons/mid-button'
import IconAndTooltipButton from '../../components/buttons/small-button-with-icon'
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
        <div style={{ display: 'flex', gap: '38vw' }}>
            <div  style={{ display: 'flex'}}>
            <SearchInput />
            <FilterButton />
            </div>
            <div style={{ margin: '0px 5px 5px 0px' }} >
            <MidButton variant="DEFAULT" name="Nova Especialidade" onClick={() => navigate('/nova-especialidade')} showIcon={true} />
            </div>
        </div>

        <TableSpecialties />
      </WhiteBackground>
    </>
  )
}

export default SpecialitiesPage