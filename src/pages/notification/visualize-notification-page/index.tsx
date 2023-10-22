// Components
import { useEffect, useState } from 'react';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';

//Style
import * as S from './style';

// Hooks
import { useLocation } from 'react-router-dom';
import { getNotificationById } from '../../../services/notification-service/config';
import ContentTitle from '../../../components/titles/content-title';

// ---

const VisualizeNotificationPage = () => {
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';
   const id = location.state?.id;

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

   return (
      <>
         <S.ContentWrapper>
            <BackToPageButton link="/notificacoes" name="Notificações" />
            <WhiteBackground>
               <ContentTitle title="Dados da notificação" />
               <S.InputWrapper>
                  <Input disabled defaultValue={notificData.title} id="notification-title" placeholder="" label="Título" width="large" />
                  <Input disabled defaultValue={notificData.sendingDate.slice(0, 10)} id="notification-date" placeholder="" label="Data de envio" width="large" />
               </S.InputWrapper>
               <S.InputWrapper>
                  <TextArea disabled defaultValue={notificData.message} id="message" label="Mensagem" width="large" placeholder="" />
               </S.InputWrapper>
            </WhiteBackground>
         </S.ContentWrapper>
      </>
   );
};

export default VisualizeNotificationPage;
