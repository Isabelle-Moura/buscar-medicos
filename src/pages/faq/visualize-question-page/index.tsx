// Components
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import LargeButton from '../../../components/buttons/large-button';
import WhiteBackground from '../../../components/extras-components/white-background';
import Input from '../../../components/inputs/input';
import TextArea from '../../../components/inputs/text-area';
import { ContentTitle } from '../../dashboard/style';

// ---

const VisualizeQuestionPage = () => {
   return (
      <>
         <BackToPageButton
            link="/faq"
            name="Novo FAQ"
         />
         <WhiteBackground>
            <ContentTitle title="Dados da pergunta" />
            <div style={{ display: 'flex', marginLeft: '10px' }}>
               <Input
                  id="notification-title"
                  placeholder="Insira o título da sua pergunta."
                  label="Título"
               />
            </div>
            <div style={{ marginLeft: '10px' }}>
               <TextArea
                  id="message"
                  label="Mensagem"
                  width="large"
                  placeholder="Insira a resposta da sua pergunta."
               />
            </div>
            <div style={{ margin: '10px', alignItems: 'center', justifyContent: 'center' }}>
               <LargeButton
                  name="Salvar"
                  type="submit"
                  variant="DEFAULT"
               />
            </div>
         </WhiteBackground>
         <div style={{ backgroundColor: '#fff', width: '400px', height: '270px', fontFamily: 'Poppins, sans-serif' }}>
            <div style={{ cursor: 'pointer', marginLeft: '370px' }}>X</div>
            <div style={{ marginTop: '65px', fontWeight: '600', fontSize: '30px', textAlign: 'center' }}>
               Pergunta salva com <br />
               sucesso!
            </div>
         </div>
      </>
   );
};

export default VisualizeQuestionPage;
