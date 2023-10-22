// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import WhiteBackground from '../../components/extras-components/white-background';
import MidButton from '../../components/buttons/mid-button';
import Category from '../../components/extras-components/category';
import PageTitle from '../../components/titles/page-title';
import TableNotification from '../../components/tables/table-notification';

// ---

const NotificationPage = () => {
   const [selectedCategory, setSelectedCategory] = useState<'MEDICO' | 'CONTRATANTE'>('MEDICO');
   const navigate = useNavigate();

   const handleCategoryChange = (category: 'MEDICO' | 'CONTRATANTE') => {
      setSelectedCategory(category);
   };

   const handleCreateNewNotification = () => {
      navigate('/nova-notificacao', { state: { tipo: selectedCategory } });
   };

   return (
      <>
         <div>
            <PageTitle title="Notificações" />
            <div style={{ display: 'flex', marginLeft: '25px' }}>
               <Category name="Médicos" onCategoryChange={() => handleCategoryChange('MEDICO')} />
               <Category name="Contratantes" onCategoryChange={() => handleCategoryChange('CONTRATANTE')} />
            </div>
            <WhiteBackground>
               <div style={{ position: 'fixed', right: '30px', top: '218px' }}>
                  <MidButton variant="DEFAULT" name="Nova Notificação" onClick={handleCreateNewNotification} showIcon={true} />
               </div>
               <TableNotification selectedCategory={selectedCategory} />
            </WhiteBackground>
         </div>
      </>
   );
};

export default NotificationPage;
