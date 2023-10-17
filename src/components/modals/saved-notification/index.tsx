// Style
import * as S from './style'

// Component Type
interface Props {
  message: string
  onClose: () => void
}

// ---

const ConfirmationPopUp = ({ message, onClose }: Props) => {
  return (
    <>
      <S.Container>
        <S.ContentWrapper>
          <div onClick={onClose}>
            <S.Close>&times;</S.Close>
          </div>
          <S.Message>{message}</S.Message>
        </S.ContentWrapper>
      </S.Container>
    </>
  )
}

export default ConfirmationPopUp