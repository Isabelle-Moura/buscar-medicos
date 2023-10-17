// Components
import WhiteBackground from '../../components/extras-components/white-background'
import MidButton from '../../components/buttons/mid-button'
import Category from '../../components/extras-components/category'
import PageTitle from '../../components/titles/page-title'
import FilterButton from '../../components/extras-components/filter-button'
import SearchInput from '../../components/inputs/search-bar'
import TableFaq from '../../components/tables/table-faq'

// Hooks
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// ---

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'MEDICO' | 'CONTRATANTE'>('MEDICO')
  
  const handleCategoryChange = (category: 'MEDICO' | 'CONTRATANTE') => {
    setSelectedCategory(category)
  }
  const navigate = useNavigate()
  
  return (
    <>
      <div>
        <PageTitle title="FAQ (Perguntas Frequentes)" />
        <div style={{ display: 'flex', marginLeft: '15px' }}>
          <Category name="Contratantes" onCategoryChange={() => handleCategoryChange('MEDICO')}/>
          <Category name="Médicos" onCategoryChange={() => handleCategoryChange('CONTRATANTE')}/>
        </div>
        <WhiteBackground>
        <div style={{ display: 'flex'}}>
           <div style={{ display: 'flex', alignItems: 'center', marginTop: '-6px'}}>
              <SearchInput />
              <FilterButton />
            </div>
            <div style={{ margin: '10px 0px 10px 39vw'  }} >
              <MidButton variant="DEFAULT" name="Novo FAQ" onClick={() => navigate('/novo-faq')} showIcon={true} />            
            </div>
          </div>

          <TableFaq selectedCategory={selectedCategory} />
        </WhiteBackground>
      </div>
    </>
  )
}

export default FAQPage
