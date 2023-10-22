// Components
import { useState } from 'react';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import MidButton from '../../../components/buttons/mid-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import Modal from '../../../components/modals/modal';
import ConfirmationPopUp from '../../../components/modals/saved-notification';

//Style
import * as S from './style';

// Hooks
import { useLocation, useNavigate } from 'react-router-dom';
import { createNotification } from '../../../services/notification-service/config';
import ContentTitle from '../../../components/titles/content-title';

// ---

const NewNotificationPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';

   const [modalOpen, setModalOpen] = useState(false);
   const [notificOpen, setNotificOpen] = useState(false);

   const [notificData, setNotificData] = useState({
      title: '',
      sendingDate: '',
      message: '',
      type: `${tipo}`,
   });

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const closeNotification = () => {
      setNotificOpen(false);
   };

   const closeModalAndNotification = () => {
      closeNotification();
      closeModal();
      navigate('/notificacoes');
   };

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

   const handleCreateButton = async (notificData: NotificationData) => {
      try {
         if (notificData.sendingDate) {
            const isoDate = formatToISODate(notificData.sendingDate); //Format data with toISOString: method that converts an Date object in string
            if (isoDate !== null) {
               notificData.sendingDate = isoDate; // Update notificData with formatted date
               const response = await createNotification(notificData);
               if (response?.success === true) {
                  setTimeout(() => {
                     setNotificOpen(true);
                  }, 1000);
               }
            } else {
               console.error("Data couldn't be properly formatted.");
            }
         }
      } catch (error) {
         console.error(`There's an error!: `, error);
      }
   };

   return (
      <>
         <S.ContentWrapper>
            <BackToPageButton link="/notificacoes" name="Nova notificação" />
            <WhiteBackground>
               <ContentTitle title="Dados da notificação" />
               <S.InputWrapper>
                  <Input
                     id="notification-title"
                     placeholder="Insira o assunto da sua mensagem."
                     label="Título"
                     width="large"
                     value={notificData.title}
                     onChange={(e) => setNotificData({ ...notificData, title: e.target.value })}
                  />
                  <Input
                     id="notification-date"
                     placeholder="Insira a data de envio. (dd/mm/aa)"
                     label="Data de envio"
                     width="large"
                     value={notificData.sendingDate}
                     onChange={(e) => setNotificData({ ...notificData, sendingDate: e.target.value })}
                  />
               </S.InputWrapper>
               <S.InputWrapper>
                  <TextArea
                     id="message"
                     label="Mensagem"
                     width="large"
                     placeholder="Insira a sua mensagem aqui."
                     value={notificData.message}
                     onChange={(e) => setNotificData({ ...notificData, message: e.target.value })}
                  />
               </S.InputWrapper>
               <S.InputWrapper>
                  <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={() => openModal()} />
               </S.InputWrapper>
            </WhiteBackground>

            {modalOpen && (
               <Modal onClose={closeModal}>
                  <S.StyledTitle>Confirme os dados da notificação</S.StyledTitle>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                     <div onClick={() => closeModal()} style={{ cursor: 'pointer', marginLeft: '650px', fontSize: '20px' }}>
                        &times;
                     </div>
                     <div>
                        Destinatário: <b style={{ color: '#046639' }}>{`${tipo}`}</b>
                     </div>
                  </div>
                  <S.InputWrapper>
                     <Input disabled id="notification-title" placeholder="" defaultValue={notificData.title} label="Título" width="large" />
                     <Input disabled id="notification-date" placeholder="" defaultValue={notificData.sendingDate} label="Data de envio" width="large" />
                  </S.InputWrapper>
                  <S.InputWrapper>
                     <TextArea disabled id="message" label="Mensagem" defaultValue={notificData.message} width="large" placeholder="" />
                  </S.InputWrapper>
                  <S.ButtonsWrapper>
                     <S.Warning>
                        Esse procedimento <b>não pode ser desfeito.</b>
                     </S.Warning>
                     <MidButton name="Cancelar" variant="CANCEL" onClick={closeModal} showIcon={false} />
                     <LargeButton name="Confirmar e enviar notificação" type="submit" variant="DEFAULT" onClick={() => handleCreateButton(notificData)} />
                     {notificOpen && <ConfirmationPopUp message="Notificação salva com sucesso!" onClose={closeModalAndNotification} />}
                  </S.ButtonsWrapper>
               </Modal>
            )}
         </S.ContentWrapper>
      </>
   );
};

export default NewNotificationPage; //Sorry, teacher, for the 160 lines >.<
