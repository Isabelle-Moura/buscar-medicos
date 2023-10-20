import LargeButton from '@/components/all-buttons/large-button'
import Input from '@/components/all-inputs/input'
import ContentTitle from '@/components/titles-for-pages/title-content'

const ChangePassword = () => {
  return (
    <>
      <ContentTitle title="Alterar senha" />
      <div style={{ margin: '0px 0px 20px 20px' }}>
        <Input label="Nova senha" id="new-password" placeholder="" />
        <Input label="Confirmar nova senha" id="confirm-new-password" placeholder="" />
        <div style={{ marginTop: '15px' }}>
          <LargeButton name="Salvar senha" variant="DEFAULT" type="submit" />
        </div>
      </div>
    </>
  )
}

export default ChangePassword
