// Components
import MidButton from '../../buttons/mid-button'

// Style
import * as S from './style'

// Component Type
interface Props {
  onCancel: () => void
  onConfirm: () => void
}

// ---

const DeleteConfirmation = ({ onCancel, onConfirm }: Props) => {
  return (
    <S.Container>
      <S.CloseTimes onClick={onCancel}>&times;</S.CloseTimes>
      <S.Message>
        Tem certeza que deseja <br />
        <u style={{ color: 'red' }}>excluir</u> este item?
      </S.Message>
      <div onClick={onConfirm}>
        <MidButton name="Sim, excluir item." variant="DEFAULT" />
      </div>
      <S.GoBackLink onClick={onCancel}>Voltar</S.GoBackLink>
    </S.Container>
  )
}

export default DeleteConfirmation