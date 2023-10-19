// Components
import BackToPageButton from "../../../components/buttons/back-to-page-button"
import LargeButton from "../../../components/buttons/large-button"
import WhiteBackground from "../../../components/extras-components/white-background"
import Input from "../../../components/inputs/input"
import CustomSwitch from "../../../components/inputs/switch"
import ConfirmationPopUp from "../../../components/modals/saved-notification"

// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Styles
import { ContentTitle } from "../../dashboard/style"
import { StyledText } from "../../register-users/user-data-page/style"

// Service
import { createSpecialty } from "../../../services/specialties-service/config"

// ---

const NewSpecialtyPage = () => {
  const navigate = useNavigate();

  const [successNotification, setSuccessNotification] = useState(false);

  const [specialtyData, setSpecialtyData] = useState({
    name: '',
    enabled: false,
  });

  const closeNotification = () => {
    setSuccessNotification(false);
  };

  const handleCreateButton = async (specialtyData: SpecialtyData) => {
    const dataToSend = {...specialtyData}

    try {
      const response = await createSpecialty(dataToSend)    
      
      if (response?.success === true) {
        setTimeout(() => {
          setSuccessNotification(true);
        }, 1000);
      }
    } catch (error) {
      console.error(`There's an error!`, error)
    }
  }

  return (
    <>
      <BackToPageButton link="/especialidades" name="Nova especialidade" />
      <WhiteBackground>
        <ContentTitle title="Dados da especialidade" />
        <div style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center' }}>
          <Input id="speciality-title" placeholder="Insira um título para a especialidade." value={specialtyData.name} onChange={e => setSpecialtyData({...specialtyData, name: e.target.value})} label="Nome" width="large" />
          <div style={{margin: '10px'}}>
            <StyledText style={{margin: '5px 0px 0px 0px'}}>Situação</StyledText>
            <CustomSwitch checked={specialtyData.enabled} label={specialtyData.enabled ? 'Ativo' : 'Inativo'} />
          </div>
        </div>
        <div style={{ margin: '20px 10px', alignItems: 'center', justifyContent: 'center' }}>
          <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={() => handleCreateButton(specialtyData)}/>
        </div>
      </WhiteBackground>
      {successNotification && <ConfirmationPopUp message='Especialidade salva com sucesso!' onClose={() => {
      closeNotification();
      navigate('/especialidades');
    }} />}
    </>
  )
}

export default NewSpecialtyPage
