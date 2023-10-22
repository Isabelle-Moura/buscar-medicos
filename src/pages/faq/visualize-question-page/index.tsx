// Components
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import ContentTitle from '../../../components/titles/content-title';

// Hooks
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Service
import { getQuestionById } from '../../../services/faq-service/config';

// ---

const VisualizeQuestionPage = () => {
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';
   const id = location.state?.id;

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

   return (
      <>
         <BackToPageButton link="/faq" name="FAQs" />
         <WhiteBackground>
            <ContentTitle title="Dados da pergunta" />
            <div style={{ display: 'flex', marginLeft: '10px' }}>
               <Input id="notification-title" placeholder="" label="Título" defaultValue={questionData.title} disabled />
            </div>
            <div style={{ marginLeft: '10px' }}>
               <TextArea id="message" label="Mensagem" width="large" placeholder="" defaultValue={questionData.message} disabled />
            </div>
         </WhiteBackground>
      </>
   );
};

export default VisualizeQuestionPage;
