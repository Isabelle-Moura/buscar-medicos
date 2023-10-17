import { useNavigate } from 'react-router-dom'
import VisualizeIcon from '../../assets/icons/visualize.png'
import VisualizeToolTip from '../../assets/icons/visualizeTooltip.png'
import EditIcon from '../../assets/icons/edit.png'
import EditToolTip from '../../assets/icons/editTooltip.png'
import RemoveIcon from '../../assets/icons/delete.png'
import RemoveToolTip from '../../assets/icons/removeTooltip.png'
import WhiteBackground from '../../components/extras-components/white-background'
import MidButton from '../../components/buttons/mid-button'
import Category from '../../components/extras-components/category'
import PageTitle from '../../components/titles/page-title'
import { useState } from 'react'
import IconAndTooltipButton from '../../components/buttons/small-button-with-icon'
import FilterButton from '../../components/extras-components/filter-button'
import SearchInput from '../../components/inputs/search-bar'


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
        <div style={{ display: 'flex', gap: '38vw' }}>
            <div style={{ display: 'flex'}}>
              <SearchInput />
              <FilterButton />
            </div>
            <div style={{ margin: '0px 5px 5px 0px' }} >
              <MidButton variant="DEFAULT" name="Novo FAQ" onClick={() => navigate('/novo-faq')} showIcon={true} />
            </div>
        </div>

          <div style={{ display: 'flex' }}>
            <IconAndTooltipButton icon={VisualizeIcon} tooltip={VisualizeToolTip} hover="#EDEDED" />
            <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />
            <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" />
          </div>
        </WhiteBackground>
      </div>
    </>
  )
}

export default FAQPage
