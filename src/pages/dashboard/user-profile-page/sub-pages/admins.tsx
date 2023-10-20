import UserDataInfo from '@/components/profile-page-components/user-data-info'
import EditToolTip from '../../../../assets/icons/editTooltip.png'
import EditIcon from '../../../../assets/icons/edit.png'
import DeleteToolTip from '../../../../assets/icons/removeTooltip.png'
import DeleteIcon from '../../../../assets/icons/delete.png'
import BackToPageButton from '@/components/all-buttons/back-to-page-button'
import LargeButton from '@/components/all-buttons/large-button'
import AddButton from '@/components/all-buttons/mid-button'
import Tooltip from '@/components/all-buttons/small-button-icon'
import Input from '@/components/all-inputs/input'
import ContentTitle from '@/components/titles-for-pages/title-content'

const Admins = () => {
  return (
    <>
      <ContentTitle title="Administrar perfis" />
      <UserDataInfo
        infoTitle="Bruno"
        infoContent="bruno@gmail.com"
        button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />}
        scndButton={<Tooltip icon={DeleteIcon} tooltip={DeleteToolTip} hover="'#ffe1e1" />}
      />
      <UserDataInfo
        infoTitle="Júlio"
        infoContent="julio@gmail.com"
        button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />}
        scndButton={<Tooltip icon={DeleteIcon} tooltip={DeleteToolTip} hover="'#ffe1e1" />}
      />
      <UserDataInfo
        infoTitle="Mariana"
        infoContent="mariana@gmail.com"
        button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />}
        scndButton={<Tooltip icon={DeleteIcon} tooltip={DeleteToolTip} hover="'#ffe1e1" />}
      />
      <div style={{ marginTop: '10px' }}>
        <AddButton variant="DEFAULT" name="Novo Perfil" showIcon={true} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ContentTitle title="Novo perfil" />
          <div style={{ cursor: 'pointer', marginLeft: '190px' }}>&times;</div>
        </div>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '5px 5px 20px 15px',
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <Input label="Nome" id="name" placeholder="" size="large" />
          <Input label="E-mail" id="email" placeholder="" size="large" />
          <Input label="Senha" id="password" placeholder="" size="large" />
          <Input label="Confirmar senha" id="confirmPassword" placeholder="" size="large" />
          <div style={{ marginTop: '10px' }}>
            <LargeButton name="Salvar alterações" type="submit" variant="DEFAULT" />
          </div>
        </div>
      </div>

      <div>
        <BackToPageButton link="/perfil-do-usuario/admins" name="Bruno Alves" />
        <UserDataInfo infoTitle="Nome" infoContent="Bruno" button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />} />
        <UserDataInfo infoTitle="E-mail" infoContent="bruno@gmail.com" button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />} />
        <UserDataInfo infoTitle="Senha" infoContent="********" button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />} />

        <ContentTitle title="Permissões" />
        <input type="checkbox" />
        <label>
          <strong>Admin. geral</strong>
        </label>
        <br />
        <input type="checkbox" />
        <label>Admin. parcial</label>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10px' }}>
          <LargeButton name="Salvar alterações" type="submit" variant="DEFAULT" />
        </div>
        <LargeButton name="Excluir perfil" type="submit" variant="CANCEL" />
      </div>
    </>
  )
}

export default Admins
