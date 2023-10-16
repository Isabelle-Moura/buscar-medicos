// Style
import * as S from './style'

// Component Type
interface Props {
  name: string // Name to display in the card
  info: string | number // Additional information for the card
  icon: string // Icon to be displayed in the card
  variant?: 'doctors' | 'contractors'; 
  status?: 'available' | 'unavailable'
}

// ---

const Card = ({ name, info, icon, variant, status }: Props) => {
  const variantColors = {
    doctors: '#004ce8',
    contractors: '#ffb801'
  };

  const statusColors = {
    available: '#00c240',
    unavailable: '#ff3333'
  };

  return (
    <>  
      <S.CardBackground>
        <div>
          <S.IconsColorsTotal style={{
            backgroundColor: variant ? variantColors[variant] : (status ? statusColors[status] : ''),
          }}>
            <img src={icon} width="30px" height="30px" />
          </S.IconsColorsTotal>
        </div>
        <div>
          <S.CardName>{name}</S.CardName>
          <S.CardInfo>{info}</S.CardInfo>
        </div>
      </S.CardBackground>
    </>
  )
}

export default Card
