//Style
import * as S from './style';

//Icons
import WomanLaptop from '../../../assets/images/lady-with-glasses.png';
import Elipse from '../../../assets/images/elipse-light-green.png';
import CalendarIcon from '../../../assets/icons/calendar.png';

//Hooks
import { useEffect, useState } from 'react';

//Component Service
import { Callendar } from '../../../services/dashboard-service/config';

// ---

const Greetings = () => {
   // State to store the current date
   const [currentDate, setCurrentDate] = useState<string | null>(null);

   useEffect(() => {
      // Function to fetch the current date (function from service)
      const fetchCurrentDate = async () => {
         try {
            const response = await Callendar();
            setCurrentDate(response); // Sets the current date with the answer obtained
         } catch (error) {
            console.error('Error getting the current date:', error);
         }
      };

      // Calling the function to fetch the current date when assembling the component
      fetchCurrentDate();
   }, []);

   return (
      <>
         <S.GreenBackground>
            <div>
               <S.ElipseImg src={Elipse} /> {/* Ellipse image */}
               <S.WomanImg src={WomanLaptop} /> {/* Image of woman with laptop */}
            </div>
            <S.ContentWrapper>
               <S.CallendarBackground>
                  <img src={CalendarIcon} style={{ marginRight: '6px' }} /> {/* Calendar icon */}
                  <span>{currentDate}</span> {/* Current date obtained dynamically */}
               </S.CallendarBackground>
               <S.Welcome>Seja bem-vindo(a)!</S.Welcome> {/* Welcome greeting */}
               <S.WelcomeSubtitle>
                  Neste painel você poderá administrar <br /> seu site de forma simples e prática.
               </S.WelcomeSubtitle>
               {/* Welcome subtitle */}
            </S.ContentWrapper>
         </S.GreenBackground>
      </>
   );
};

export default Greetings;
