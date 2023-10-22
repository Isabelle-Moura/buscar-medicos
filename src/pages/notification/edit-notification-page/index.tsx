// Components
import { useEffect, useState } from 'react';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import ConfirmationPopUp from '../../../components/modals/saved-notification';

//Style
import * as S from './style';

// Hooks
import { useLocation, useNavigate } from 'react-router-dom';
import { getNotificationById, updateNotification } from '../../../services/notification-service/config';
import ContentTitle from '../../../components/titles/content-title';

// ---

const EditNotificationPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';
   const id = location.state?.id;

   const [successNotification, setSuccessNotification] = useState(false);

   const closeNotification = () => {
      setSuccessNotification(false);
   };

   const [notificData, setNotificData] = useState({
      title: '',
      sendingDate: '',
      message: '',
      type: `${tipo}`,
   });

   useEffect(() => {
      const fetchData = async () => {
         if (id) {
            try {
               const notification = await getNotificationById(id);
               if (notification) {
                  setNotificData({
                     ...notification,
                  });
               }
            } catch (error) {
               console.error("Error in fetch notification's data:", error);
            }
         }
      };
      fetchData();
   }, [id]);

   const formatToISODate = (formattedDate: any) => {
      // Spected format from user's input: "dd/mm/aa"
      const parts = formattedDate.split('/');
      if (parts.length === 3) {
         const day = parseInt(parts[0]);
         const month = parseInt(parts[1]);
         const year = 2000 + parseInt(parts[2]); // Just assuming that years are always like this: 20xx
         return new Date(year, month - 1, day).toISOString();
      }
      return null; // Return null if format is incorrect
   };

   const handleSaveButton = async () => {
      try {
         const dataToUpdate = {
            title: notificData.title,
            sendingDate: notificData.sendingDate,
            message: notificData.message,
            type: notificData.type,
         };

         const isoDate = formatToISODate(notificData.sendingDate); //Format data with toISOString: method that converts an Date object in string
         if (isoDate !== null) {
            notificData.sendingDate = isoDate;
         }

         const response = await updateNotification(id, dataToUpdate);

         if (response?.success === true) {
            setTimeout(() => {
               setSuccessNotification(true);
            }, 1000);
         }
      } catch (error) {
         console.error('Error in notification update:', error);
      }
   };

   return (
      <>
         <S.ContentWrapper>
            <BackToPageButton link="/notificacoes" name="Notificações" />
            <WhiteBackground>
               <div style={{ margin: '-2px 0px -20px 0px' }}>
                  <ContentTitle title="Editar Dados da notificação" />
               </div>
               <S.InputWrapper>
                  <Input
                     onChange={(e) => setNotificData({ ...notificData, title: e.target.value })}
                     value={notificData.title}
                     id="notification-title"
                     placeholder=""
                     label="Título"
                     width="large"
                  />
                  <Input
                     onChange={(e) => setNotificData({ ...notificData, sendingDate: e.target.value })}
                     value={notificData.sendingDate.slice(0, 10)}
                     id="notification-date"
                     placeholder=""
                     label="Data de envio"
                     width="large"
                  />
               </S.InputWrapper>
               <S.InputWrapper>
                  <TextArea
                     onChange={(e) => setNotificData({ ...notificData, message: e.target.value })}
                     value={notificData.message}
                     id="message"
                     label="Mensagem"
                     width="large"
                     placeholder=""
                  />
               </S.InputWrapper>
               <S.InputWrapper>
                  <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={handleSaveButton} />
               </S.InputWrapper>
            </WhiteBackground>
         </S.ContentWrapper>
         {successNotification && (
            <ConfirmationPopUp
               message="Dados alterados com sucesso!"
               onClose={() => {
                  closeNotification();
                  navigate('/notificacoes');
               }}
            />
         )}
      </>
   );
};

export default EditNotificationPage;
