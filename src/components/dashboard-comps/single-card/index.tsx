import * as S from './style'

type CardType = 'DOCTORS' | 'HIRERS'
type Status = 'AVAILABLE' | 'UNAVAILABLE' // Availability status (optional)

interface Props {
  name: string // Name to display in the card
  info: string | number // Additional information for the card
  icon: string // Icon to be displayed in the card
  variant?: CardType// Type of card (optional)
  status?: Status | undefined
}

const Card = ({ name, info, icon, variant, status }: Props) => {
  return (
    <>  
    {/* If props "variant" is used when Card component is called, then this will be render. If not, then that will be render*/}
      {variant ? (
        <S.CardBackground>
          <div>
            <S.IconsColorsTotal variant={variant}>
              <img src={icon} width="28px" height="28px" />
            </S.IconsColorsTotal>
          </div>
          <div>
            <S.CardName>{name}</S.CardName>
            <S.CardInfo>{info}</S.CardInfo>
          </div>
        </S.CardBackground>
      ) : (
        <S.CardBackground>
          <div>
            <S.AvailabilityIcons status={status}>
              <img src={icon} width="28px" height="28px" />
            </S.AvailabilityIcons>
          </div>
          <div>
            <S.CardName>{name}</S.CardName>
            <S.CardInfo>{info}</S.CardInfo>
          </div>
        </S.CardBackground>
      )}
    </>
  )
}

export default Card
