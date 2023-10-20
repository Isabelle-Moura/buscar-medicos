import Tooltip from '@/components/all-buttons/small-button-icon'
import EditIcon from '../../../../assets/icons/edit.png'
import EditToolTip from '../../../../assets/icons/editTooltip.png'
import UserDataInfo from '@/components/profile-page-components/user-data-info'
import ContentTitle from '@/components/titles-for-pages/title-content'

const UserData = () => {
  return (
    <>
      <ContentTitle title="Dados" />
      <UserDataInfo infoTitle="Nome" infoContent="Izabel" button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />} />
      <UserDataInfo infoTitle="E-mail" infoContent="izabel@gmail.com" button={<Tooltip icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />} />
    </>
  )
}

export default UserData
