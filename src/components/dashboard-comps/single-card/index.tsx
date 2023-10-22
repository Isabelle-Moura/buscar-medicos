// Style
import * as S from './style';

// Component Type
interface Props {
   name: string;
   info: string | number;
   icon: string;
   variant?: 'doctors' | 'contractors';
   status?: 'available' | 'unavailable';
}

// ---

const Card = ({ name, info, icon, variant, status }: Props) => {
   // Colors associated with each card variant
   const variantColors = {
      doctors: '#004ce8',
      contractors: '#ffb801',
   };

   // Colors associated with each card status
   const statusColors = {
      available: '#00c240',
      unavailable: '#ff3333',
   };

   return (
      <>
         <S.CardBackground>
            <div>
               <S.IconsColorsTotal
                  style={{
                     backgroundColor: variant ? variantColors[variant] : status ? statusColors[status] : '',
                  }}
               >
                  <img src={icon} width="30px" height="30px" /> {/* Card icon */}
               </S.IconsColorsTotal>
            </div>
            <div>
               <S.CardName>{name}</S.CardName> {/* Name displayed on card */}
               <S.CardInfo>{info}</S.CardInfo> {/* Additional information displayed on the card */}
            </div>
         </S.CardBackground>
      </>
   );
};

export default Card;
