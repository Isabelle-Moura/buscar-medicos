// Style
import * as S from './style'

// ---

interface PageTitleProps {
  title: string
  category?: string
}

const PageTitle = ({ title, category }: PageTitleProps) => {
  return (
    <>
      <S.Container>
        <S.PageTitle>{title}</S.PageTitle> <S.Category>{category}</S.Category>
      </S.Container>
    </>
  )
}

export default PageTitle