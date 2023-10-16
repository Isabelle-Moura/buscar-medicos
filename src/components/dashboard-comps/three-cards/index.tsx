//Style
import * as S from './style'

//Components
import Card from '../single-card'

//Hooks
import { useEffect, useState } from 'react'

//Icons
import DoctorsIcon from '../../../assets/icons/register-users.png'
import ContractorsIcon from '../../../assets/icons/hirer.png'

//Component Service
import { counterDashboard } from '../../../services/dashboard-service/config'

// ---

const Cards = () => {
  const [doctor, setDoctors] = useState({ total: 0, available: 0, unavailable: 0 })
  const [contractors, setContractors] = useState({ total: 0, available: 0, unavailable: 0 })

  useEffect(() => {
    const fetchDoctorsInfos = async () => {
      try {
        const responseDoctors = await counterDashboard()
        if (responseDoctors) {
          setDoctors(responseDoctors.doctor)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchDoctorsInfos()
  }, [])

  useEffect(() => {
    const fetchContractorsInfos = async () => {
      try {
        const responseContractors = await counterDashboard()
        if (responseContractors) {
          setContractors(responseContractors.contractor)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchContractorsInfos()
  }, [])

  return (
    <>
      <S.CardsContainer>
        <S.WhiteBackground>
          <S.ContentTitle>Médicos</S.ContentTitle>
          <S.CardsWrapper>
            <Card icon={DoctorsIcon} name="Total" info={doctor.total} variant="DOCTORS" />
            <Card icon={DoctorsIcon} name="Disponíveis" info={doctor.available} status="AVAILABLE" />
            <Card icon={DoctorsIcon} name="Indisponíveis" info={doctor.unavailable} status="UNAVAILABLE" />
          </S.CardsWrapper>
        </S.WhiteBackground>

        <S.WhiteBackground>
          <S.ContentTitle>Contratantes</S.ContentTitle>
          <S.CardsWrapper>
            <Card icon={ContractorsIcon} name="Total" info={contractors.total} variant="HIRERS" />
            <Card icon={ContractorsIcon} name="Ativos" info={contractors.available} status="AVAILABLE" />
            <Card icon={ContractorsIcon} name="Inativos" info={contractors.unavailable} status="UNAVAILABLE" />
          </S.CardsWrapper>
        </S.WhiteBackground>
      </S.CardsContainer>
    </>
  )
}

export default Cards