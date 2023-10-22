// Hooks
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Service
import { getPlanById } from '../../../services/plans-service/config';

// Components
import WhiteBackground from '../../../components/extras-components/white-background';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import Input from '../../../components/inputs/input';
import CustomSwitch from '../../../components/inputs/switch';
import ContentTitle from '../../../components/titles/content-title';

// ---

const VisualizePlanPage = () => {
   const location = useLocation();
   const tipo = location.state?.tipo || 'contratante';
   const id = location.state?.id;

   const [planData, setPlanData] = useState({
      planTitle: '',
      enabled: false,
      period: '',
      type: `${tipo}`,
      values: '',
   });

   useEffect(() => {
      const fetchData = async () => {
         if (id) {
            try {
               const plan = await getPlanById(id);
               if (plan) {
                  setPlanData({
                     ...plan,
                     values: plan.values.toString(),
                  });
               }
            } catch (error) {
               console.error("Error in fetch plan's data:", error);
            }
         }
      };

      fetchData();
   }, [id]);

   return (
      <>
         <BackToPageButton link="/planos" name="Planos" />
         <WhiteBackground>
            <ContentTitle title="Dados do plano" />
            <div style={{ marginLeft: '15px' }}>
               <div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                     <Input id="plan-title" placeholder="" defaultValue={planData.planTitle} label="Título do Plano" width="large" disabled />
                     <div style={{ marginTop: '35px' }}>
                        <CustomSwitch checked={planData.enabled} label={planData.enabled ? 'Ativo' : 'Inativo'} />
                     </div>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '10px' }}>
                  <Input label="Período" id="period" defaultValue={planData.period} placeholder="" disabled />
                  <div>
                     <Input label="Valor" id="value" placeholder="" defaultValue={planData.values} disabled />
                  </div>
               </div>
            </div>
         </WhiteBackground>
      </>
   );
};

export default VisualizePlanPage;
