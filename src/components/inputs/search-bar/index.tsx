// Icon
import SearchIcon from '../../../assets/icons/search.png'

// Style
import * as S from './style'

// ---

const SearchInput = () => {
  return (
    <>
      <div>
        <S.Input placeholder="Pesquisa uma palavra-chave" />
        <S.Icon src={SearchIcon} />
      </div>
    </>
  )
}

export default SearchInput