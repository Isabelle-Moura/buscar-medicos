// Components
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import { getQuestionById, updateQuestion } from '../../../services/faq-service/config';
import ContentTitle from '../../../components/titles/content-title';
import ConfirmationPopUp from '../../../components/modals/saved-notification';

// ---

const EditQuestionPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';
   const id = location.state?.id;

   const [successNotification, setSuccessNotification] = useState(false);

   const closeNotification = () => {
      setSuccessNotification(false);
   };

   const [questionData, setQuestionData] = useState({
      title: '',
      message: '',
      type: `${tipo}`,
   });

   useEffect(() => {
      const fetchData = async () => {
         if (id) {
            try {
               const question = await getQuestionById(id);
               if (question) {
                  setQuestionData({
                     ...question,
                  });
               }
            } catch (error) {
               console.error("Error in fetch question's data:", error);
            }
         }
      };

      fetchData();
   }, [id]);

   const handleSaveButton = async () => {
      try {
         const dataToUpdate = {
            title: questionData.title,
            message: questionData.message,
            type: questionData.type,
         };

         const response = await updateQuestion(id, dataToUpdate);

         if (response?.success === true) {
            setTimeout(() => {
               setSuccessNotification(true);
            }, 1000);
         }
      } catch (error) {
         console.error('Error in question update:', error);
      }
   };

   return (
      <>
         <BackToPageButton link="/faq" name="FAQs" />
         <WhiteBackground>
            <ContentTitle title="Dados da pergunta" />
            <div style={{ display: 'flex', marginLeft: '10px' }}>
               <Input
                  id="notification-title"
                  placeholder=""
                  label="Título"
                  value={questionData.title}
                  onChange={(e) => {
                     setQuestionData({ ...questionData, title: e.target.value });
                  }}
               />
            </div>
            <div style={{ marginLeft: '10px' }}>
               <TextArea
                  id="message"
                  label="Mensagem"
                  width="large"
                  placeholder=""
                  value={questionData.message}
                  onChange={(e) => {
                     setQuestionData({ ...questionData, message: e.target.value });
                  }}
               />
            </div>
            <div style={{ margin: '10px', alignItems: 'center', justifyContent: 'center' }}>
               <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={handleSaveButton} />
            </div>
         </WhiteBackground>
         {successNotification && (
            <ConfirmationPopUp
               message="Dados alterados com sucesso!"
               onClose={() => {
                  closeNotification();
                  navigate('/faq');
               }}
            />
         )}
      </>
   );
};

export default EditQuestionPage;
