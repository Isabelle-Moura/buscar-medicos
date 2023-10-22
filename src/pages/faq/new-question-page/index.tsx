// Components
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import { createQuestion } from '../../../services/faq-service/config';
import ContentTitle from '../../../components/titles/content-title';
import ConfirmationPopUp from '../../../components/modals/saved-notification';

// ---

const NewQuestionPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';

   const [successNotification, setSuccessNotification] = useState(false);

   const [questionData, setQuestionData] = useState({
      title: '',
      message: '',
      type: `${tipo}`,
   });

   const closeNotification = () => {
      setSuccessNotification(false);
   };

   const handleCreateButton = async (questionData: QuestionData) => {
      const dataToSend = { ...questionData };

      try {
         const response = await createQuestion(dataToSend);

         if (response?.success === true) {
            setTimeout(() => {
               setSuccessNotification(true);
            }, 1000);
         }
      } catch (error) {
         console.error(`There's an error!: `, error);
      }
   };

   return (
      <>
         <BackToPageButton link="/faq" name="Novo FAQ" />
         <WhiteBackground>
            <div style={{ margin: '-5px 0px' }}>
               <ContentTitle title={`Novo FAQ - ${tipo}`} />
            </div>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
               <Input
                  id="notification-title"
                  placeholder="Insira o título da sua pergunta."
                  label="Título"
                  value={questionData.title}
                  onChange={(e) => setQuestionData({ ...questionData, title: e.target.value })}
               />
            </div>
            <div style={{ marginLeft: '10px' }}>
               <TextArea
                  id="message"
                  label="Mensagem"
                  width="large"
                  placeholder="Insira a resposta da sua pergunta."
                  value={questionData.message}
                  onChange={(e) => setQuestionData({ ...questionData, message: e.target.value })}
               />
            </div>
            <div style={{ margin: '10px', alignItems: 'center', justifyContent: 'center' }}>
               <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={() => handleCreateButton(questionData)} />
            </div>
         </WhiteBackground>
         {successNotification && (
            <ConfirmationPopUp
               message="FAQ salvo com sucesso!"
               onClose={() => {
                  closeNotification();
                  navigate('/faq');
               }}
            />
         )}
      </>
   );
};

export default NewQuestionPage;
