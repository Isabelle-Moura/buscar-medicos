// Style
import * as S from './style'

// Component Type
interface Props {
  name: string
  total?: number
  onCategoryChange:(categoryName: string) => void
}

// ---

const Category = ({ name, total, onCategoryChange }: Props) => {
  const handleCategoryClick = () => {
    onCategoryChange(name)
  }
  return (
    <>
      <S.Container tabIndex={0} className="active-background" onClick={handleCategoryClick}>
        <S.StyledName className="active-name">{name}</S.StyledName>
        <S.StyledTotal className="active-total">{total}</S.StyledTotal>
      </S.Container>
    </>
  )
}

export default Category