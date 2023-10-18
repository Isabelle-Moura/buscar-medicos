import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlanById } from '../../../services/plans-service/config'; // Importe a função para buscar o plano

import WhiteBackground from '../../../components/extras-components/white-background';
import BackToPageButton from '../../../components/buttons/back-to-page-button';
import Input from '../../../components/inputs/input';
import CustomSwitch from '../../../components/inputs/switch';
import Select from '../../../components/inputs/select';
import ContentTitle from '../../../components/titles/content-title';
import IconAndTooltipButton from '../../../components/buttons/small-button-with-icon';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

const VisualizePlanPage = () => {
    const location = useLocation();
    const tipo = location.state?.tipo || 'contratante';
    const id = location.state?.id;

    console.log('ID:', id)
  
    const [planData, setPlanData] = useState({
      planTitle: '',
      enabled: false,
      period: '',
      type: `${tipo}`,
      values: '', // Inicialize como uma string
    });
  
    useEffect(() => {
      const fetchData = async () => {
        if (id) {
          try {
            const plan = await getPlanById(id);
            if (plan) {
              setPlanData({
                ...plan, // Mantenha todos os outros campos do plano
                values: plan.values.toString(), // Converta values para uma string
              });
            }
          } catch (error) {
            console.error('Erro ao buscar os dados do plano:', error);
          }
        }
      };
  
      fetchData();
    }, [id]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BackToPageButton link="/planos" name="Planos" />
        <div style={{ display: 'flex', marginRight: '70px' }}>
          <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />
          <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" />
        </div>
      </div>
      <WhiteBackground>
        <ContentTitle title='Dados do plano' />
        <div>
          <Input id="plan-title" placeholder='' defaultValue={planData.planTitle} label="Título do Plano" width="large" />
          <div>
            <CustomSwitch checked={planData.enabled} label={planData.enabled ? 'Ativo' : 'Inativo'} />
          </div>
          <Select label="Período" id="period" options={['Mensal', 'Semanal', 'Trimestral']} defaultValue={planData.period} />
        </div>
        <div>
          <Input label="Valor" id="value" placeholder='' defaultValue={planData.values}  />
        </div>
      </WhiteBackground>
    </>
  );
};

export default VisualizePlanPage;
