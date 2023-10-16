// Icon
import SideArrow from '../../../assets/icons/back-left-arrow.png'

// Style
import * as S from './style'

// Component Type
interface Props {
  link: string
  name: string
}

// ---

const BackToPageButton = ({ link, name }: Props) => {
  return (
    <>
      <S.ButtonAndTitleWrapper>
        <S.StyledLink to={link}>
          <S.Icon src={SideArrow} />
        </S.StyledLink>
        <S.StyledTitle>{name}</S.StyledTitle>
      </S.ButtonAndTitleWrapper>
    </>
  )
}

export default BackToPageButton