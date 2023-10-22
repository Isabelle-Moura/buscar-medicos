// Components
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import ConfirmationPopUp from '../../../components/modals/saved-notification';
import Input from '../../../components/inputs/input';
import CustomSwitch from '../../../components/inputs/switch';

// Hooks
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Style
import { StyledText } from '../../register-users/user-data-page/style';

// Services
import { getSpecialtyById, updateSpecialty } from '../../../services/specialties-service/config';
import ContentTitle from '../../../components/titles/content-title';

// ---

const EditSpecialtyPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const id = location.state?.id;

   const [successNotification, setSuccessNotification] = useState(false);

   const closeNotification = () => {
      setSuccessNotification(false);
   };

   const [specialtyData, setSpecialtyData] = useState({
      name: '',
      enabled: false,
   });

   useEffect(() => {
      const fetchData = async () => {
         if (id) {
            try {
               const specialty = await getSpecialtyById(id);
               if (specialty) {
                  setSpecialtyData({
                     ...specialty,
                  });
               }
            } catch (error) {
               console.error('Error in fetch specialty data:', error);
            }
         }
      };
      fetchData();
   }, [id]);

   const handleSaveButton = async () => {
      try {
         const dataToUpdate = {
            name: specialtyData.name,
            enabled: specialtyData.enabled,
         };

         const response = await updateSpecialty(id, dataToUpdate);

         if (response?.success === true) {
            setTimeout(() => {
               setSuccessNotification(true);
            }, 1000);
         }
      } catch (error) {
         console.error('Error in specialty update:', error);
      }
   };

   return (
      <>
         <BackToPageButton link="/especialidades" name="Especialidades" />
         <WhiteBackground>
            <ContentTitle title="Editar Dados da Especialidade" />
            <div style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center' }}>
               <Input
                  id="speciality-title"
                  placeholder=""
                  value={specialtyData.name}
                  onChange={(e) => setSpecialtyData({ ...specialtyData, name: e.target.value })}
                  label="Nome"
                  width="large"
               />
               <div style={{ margin: '10px' }}>
                  <StyledText style={{ margin: '5px 0px 0px 0px' }}>Situação</StyledText>
                  <CustomSwitch
                     checked={specialtyData.enabled}
                     onClick={() => {
                        setSpecialtyData({ ...specialtyData, enabled: !specialtyData.enabled });
                     }}
                     label={specialtyData.enabled ? 'Ativo' : 'Inativo'}
                  />
               </div>
            </div>
            <div style={{ margin: '20px 10px', alignItems: 'center', justifyContent: 'center' }}>
               <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={handleSaveButton} />
            </div>
         </WhiteBackground>
         {successNotification && (
            <ConfirmationPopUp
               message="Dados alterados com sucesso!"
               onClose={() => {
                  closeNotification();
                  navigate('/especialidades');
               }}
            />
         )}
      </>
   );
};

export default EditSpecialtyPage;
