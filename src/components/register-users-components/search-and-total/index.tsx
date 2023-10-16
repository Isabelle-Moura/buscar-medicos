// Component
import SearchInput from '../../inputs/search-bar'

// Style
import * as S from './style'

// Component Type
interface Props {
  counter: number
}

// ---

const SearchAndTotal = ({ counter }: Props) => {
  return (
    <>
      <S.Container>
        <SearchInput />
        <S.Total>
          Total de usuários <br /> <b>{counter}</b>
        </S.Total>
      </S.Container>
    </>
  )
}

export default SearchAndTotal