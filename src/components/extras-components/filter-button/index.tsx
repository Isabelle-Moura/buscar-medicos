// Icon
import FilterIcon from '../../../assets/icons/filter.png'

// Style
import * as S from './style'

// ---

const FilterButton = () => {
    return (
     <>
        <S.StyledButton title="Ordenar por: crescente e decrescente.">
           <img src={FilterIcon} alt="Filter" />
        </S.StyledButton>
    </>
    )
}

export default FilterButton