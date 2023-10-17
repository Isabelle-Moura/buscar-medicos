// Hooks
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Service
import { getPlans, getPlansCounter } from '../../services/plans-service/config'

// Components
import WhiteBackground from '../../components/extras-components/white-background'
import MidButton from '../../components/buttons/mid-button'
import Category from '../../components/extras-components/category'
import SearchInput from '../../components/inputs/search-bar'
import TablePlans from '../../components/tables/table-plans'
import PageTitle from '../../components/titles/page-title'
import FilterButton from '../../components/extras-components/filter-button'

// ---

const PlansPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'MEDICO' | 'CONTRATANTE'>('MEDICO')
  const [counter, setCounter] = useState(0)
  
  const navigate = useNavigate()
  
  const handleCategoryChange = (category: 'MEDICO' | 'CONTRATANTE') => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const fetchCounter = async () => {
      const response = await getPlansCounter(selectedCategory)
      if (response) {
        setCounter(response)
      }
    }
    const getData = async () => {
      const response = await getPlans(selectedCategory)
      return response
    }
    fetchCounter()
    getData()
  }, [selectedCategory])

  return (
    <>
      <div>
        <PageTitle title="Planos" />
        <div style={{ display: 'flex', marginLeft: '15px' }}>
          <Category name="Médicos" total={counter} onCategoryChange={() => handleCategoryChange('MEDICO')} />
          <Category name="Contratantes" total={counter} onCategoryChange={() => handleCategoryChange('CONTRATANTE')} />
        </div>
        <WhiteBackground>
        <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '-6px'}}>
              <SearchInput />
              <FilterButton />
            </div>
            <div style={{ margin: '10px 0px 10px 37.5vw'}} >
              <MidButton variant="DEFAULT" name="Novo Plano" onClick={() => navigate('/novo-plano')} showIcon={true} />              
            </div>
        </div>
          <TablePlans selectedCategory={selectedCategory} />
        </WhiteBackground>
      </div>
    </>
  )
}

export default PlansPage