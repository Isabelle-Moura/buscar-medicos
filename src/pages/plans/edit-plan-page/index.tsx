// Hooks
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Services
import { getPlanById, updatePlan } from '../../../services/plans-service/config';

// Components
import WhiteBackground from '../../../components/extras-components/white-background';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import Input from '../../../components/inputs/input';
import CustomSwitch from '../../../components/inputs/switch';
import Select from '../../../components/inputs/select';
import ContentTitle from '../../../components/titles/content-title';
import LargeButton from '../../../components/buttons/large-button';
import ConfirmationPopUp from '../../../components/modals/saved-notification';

// ---

const EditPlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tipo = location.state?.tipo || 'contratante';
  const id = location.state?.id;

  const [successNotification, setSuccessNotification] = useState(false);
  
  const closeNotification = () => {
    setSuccessNotification(false);
  };

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
          console.error('Error in fetch plan data:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleSaveButton = async () => {
    try {
      const dataToUpdate = {
        planTitle: planData.planTitle,
        enabled: planData.enabled,
        period: planData.period,
        type: planData.type,
        values: parseFloat(planData.values), 
      };

      const response = await updatePlan(id, dataToUpdate);

      if (response?.success === true) {
        setTimeout(() => {
          setSuccessNotification(true);
        }, 1000);
      }
    } catch (error) {
      console.error('Error in plan update:', error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BackToPageButton link="/planos" name="Planos" />
      </div>
       <WhiteBackground>
        <ContentTitle title='Editar Dados do Plano' />
        <div style={{marginLeft: '15px'}}>
        <div>
          <div style={{display: 'flex', gap: '10px'}}>
            <Input
                id="plan-title"
                placeholder=''
                value={planData.planTitle}
                onChange={(e) => setPlanData({ ...planData, planTitle: e.target.value })}
                label="Título do Plano"
                width="large"
            />
            <Select
                label="Período"
                id="period"
                options={['Mensal', 'Semanal', 'Trimestral']}
                value={planData.period}
                onChange={(e) => setPlanData({ ...planData, period: e.target.value })}
            />
          </div>
         </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <Input
                label="Valor"
                id="value"
                placeholder=''
                value={planData.values}
                onChange={(e) => setPlanData({ ...planData, values: e.target.value })}
            />
            <div style={{marginTop: '35px', marginRight: '60px'}}>
              <CustomSwitch checked={planData.enabled} onClick={() => {
              setPlanData({ ...planData, enabled: !planData.enabled });
              }} label={planData.enabled ? 'Ativo' : 'Inativo'} />
            </div>
         </div>
            <div style={{ marginTop: '20px' }}>
              <LargeButton name="Salvar" type='submit' onClick={handleSaveButton} variant="DEFAULT" />
            </div>
        </div>
      </WhiteBackground>  
      {successNotification && <ConfirmationPopUp message='Dados alterados com sucesso!' onClose={() => {
        closeNotification();
        navigate('/planos');
      }} />}
    </>
  );
};

export default EditPlanPage;