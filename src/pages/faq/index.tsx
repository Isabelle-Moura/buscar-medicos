// Components
import WhiteBackground from '../../components/extras-components/white-background';
import MidButton from '../../components/buttons/mid-button';
import Category from '../../components/extras-components/category';
import PageTitle from '../../components/titles/page-title';
import TableFaq from '../../components/tables/table-faq';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// ---

const FAQPage = () => {
   const [selectedCategory, setSelectedCategory] = useState<'MEDICO' | 'CONTRATANTE'>('MEDICO');

   const handleCategoryChange = (category: 'MEDICO' | 'CONTRATANTE') => {
      setSelectedCategory(category);
   };
   const navigate = useNavigate();

   return (
      <>
         <div>
            <PageTitle title="FAQ (Perguntas Frequentes)" />
            <div style={{ display: 'flex', marginLeft: '15px' }}>
               <Category name="Contratantes" onCategoryChange={() => handleCategoryChange('MEDICO')} />
               <Category name="Médicos" onCategoryChange={() => handleCategoryChange('CONTRATANTE')} />
            </div>
            <WhiteBackground>
               <div style={{ margin: '-2px 0px -20px 63.5vw' }}>
                  <MidButton variant="DEFAULT" name="Novo FAQ" onClick={() => navigate('/novo-faq')} showIcon={true} />
               </div>
               <TableFaq selectedCategory={selectedCategory} />
            </WhiteBackground>
         </div>
      </>
   );
};

export default FAQPage;
