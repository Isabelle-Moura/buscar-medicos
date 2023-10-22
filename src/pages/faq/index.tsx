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
            <div style={{ display: 'flex', marginLeft: '28px' }}>
               <Category name="Médicos" onCategoryChange={() => handleCategoryChange('MEDICO')} />
               <Category name="Contratantes" onCategoryChange={() => handleCategoryChange('CONTRATANTE')} />
            </div>
            <WhiteBackground>
               <div style={{ position: 'fixed', right: '30px', top: '218px' }}>
                  <MidButton variant="DEFAULT" name="Novo FAQ" onClick={() => navigate('/novo-faq', { state: { tipo: selectedCategory } })} showIcon={true} />
               </div>
               <TableFaq selectedCategory={selectedCategory} />
            </WhiteBackground>
         </div>
      </>
   );
};

export default FAQPage;
