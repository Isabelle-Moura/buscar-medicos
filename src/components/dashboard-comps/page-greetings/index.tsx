//Style
import * as S from './style'

//Icons
import WomanLaptop from '../../../assets/images/lady-with-glasses.png'
import Elipse from '../../../assets/images/elipse-light-green.png'
import CalendarIcon from '../../../assets/icons/calendar.png'

//Hooks
import { useEffect, useState } from 'react'

//Component Service
import { Callendar } from '../../../services/dashboard-service/config'

// ---

const Greetings = () => {
  const [currentDate, setCurrentDate] = useState<string | null>(null)

  useEffect(() => {
    const fetchCurrentDate = async () => {
      //Date Function from an API.
      try {
        const response = await Callendar()
        setCurrentDate(response)
      } catch (error) {
        console.error('Erro ao obter a data atual:', error)
      }
    }

    fetchCurrentDate()
  }, [])

  return (
    <>
      <S.GreenBackground>
        <div>
          <S.ElipseImg src={Elipse} />
          <S.WomanImg src={WomanLaptop} />
        </div>
        <S.ContentWrapper>
          <S.CallendarBackground>
            <img src={CalendarIcon} style={{ marginRight: '6px' }} />
            <span>{currentDate}</span>
          </S.CallendarBackground>
          <S.Welcome>Seja bem-vindo(a)!</S.Welcome>
          <S.WelcomeSubtitle>
            Neste painel você poderá administrar <br />
            seu site de forma simples e prática.
          </S.WelcomeSubtitle>
        </S.ContentWrapper>
      </S.GreenBackground>
    </>
  )
}

export default Greetings