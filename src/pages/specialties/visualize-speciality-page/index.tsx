// Components
import BackToPageButton from "../../../components/buttons/back-to-page-button"
import WhiteBackground from "../../../components/extras-components/white-background"
import Input from "../../../components/inputs/input"
import CustomSwitch from "../../../components/inputs/switch"

// Service
import { getSpecialtyById } from "../../../services/specialties-service/config"

// Style
import { ContentTitle } from "../../dashboard/style"
import { StyledText } from "../../register-users/user-data-page/style"

// Hooks
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// ---

const VisualizeSpecialtyPage = () => {
  const location = useLocation();
  const id = location.state?.id;

  const [specialtyData, setSpecialtyData] = useState({
    name: '',
    enabled: false,
  })

  useEffect (() => {
    const fetchData = async () => {
      if (id) {
        try {
          const specialty = await getSpecialtyById(id)
          if (specialty) {
            setSpecialtyData ({
              ...specialty
            })
          }
        } catch (error) {
          console.error('Error in fetch specialty data:', error)
        }
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <BackToPageButton link="/especialidades" name="Nova especialidade" />
      <WhiteBackground>
        <ContentTitle title="Dados da especialidade" />
        <div style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center' }}>
          <Input id="speciality-title" placeholder="" defaultValue={specialtyData.name} label="Nome" width="large" disabled/>
          <div style={{margin: '10px'}}>
            <StyledText style={{margin: '5px 0px 0px 0px'}}>Situação</StyledText>
            <CustomSwitch checked={specialtyData.enabled} label="Ativo"/>
          </div>
        </div>
      </WhiteBackground>
    </>
  )   
}

export default VisualizeSpecialtyPage
