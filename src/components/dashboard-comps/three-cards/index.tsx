//Style
import * as S from './style';

//Components
import Card from '../single-card';

//Hooks
import { useEffect, useState } from 'react';

//Icons
import DoctorsIcon from '../../../assets/icons/doctor.png';
import ContractorsIcon from '../../../assets/icons/hirer.png';

//Component Service
import { counterDashboard } from '../../../services/dashboard-service/config';

// ---

const Cards = () => {
   // State to store information about doctors
   const [doctor, setDoctors] = useState({ total: 0, available: 0, unavailable: 0 });

   // State to store information about contractors
   const [contractors, setContractors] = useState({ total: 0, available: 0, unavailable: 0 });

   // UseEffect to search for information about doctors
   useEffect(() => {
      const fetchDoctorsInfos = async () => {
         try {
            const responseDoctors = await counterDashboard();
            if (responseDoctors) {
               setDoctors(responseDoctors.doctor); // Defines information about doctors in the state
            }
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchDoctorsInfos();
   }, []);

   // UseEffect to fetch information about contractors
   useEffect(() => {
      const fetchContractorsInfos = async () => {
         try {
            const responseContractors = await counterDashboard();
            if (responseContractors) {
               setContractors(responseContractors.contractor); // Defines information about contractors in the state
            }
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchContractorsInfos();
   }, []);

   return (
      <>
         <S.CardsContainer>
            <S.WhiteBackground>
               <S.ContentTitle>Médicos</S.ContentTitle>
               <S.CardsWrapper>
                  <Card icon={DoctorsIcon} name="Total" info={doctor.total} variant="doctors" />
                  <Card icon={DoctorsIcon} name="Disponível" info={doctor.available} status="available" />
                  <Card icon={DoctorsIcon} name="Indisponível" info={doctor.unavailable} status="unavailable" />
               </S.CardsWrapper>
            </S.WhiteBackground>

            <S.WhiteBackground>
               <S.ContentTitle>Contratantes</S.ContentTitle>
               <S.CardsWrapper>
                  <Card icon={ContractorsIcon} name="Total" info={contractors.total} variant="contractors" />
                  <Card icon={ContractorsIcon} name="Ativos" info={contractors.available} status="available" />
                  <Card icon={ContractorsIcon} name="Inativos" info={contractors.unavailable} status="unavailable" />
               </S.CardsWrapper>
            </S.WhiteBackground>
         </S.CardsContainer>
      </>
   );
};

export default Cards;
