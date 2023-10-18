// Hooks
import { useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Service
import { createPlan } from '../../../services/plans-service/config'

// Components
import WhiteBackground from '../../../components/extras-components/white-background'
import BackToPageButton from '../../../components/buttons/back-to-page-button'
import LargeButton from '../../../components/buttons/large-button'
import MidButton from '../../../components/buttons/mid-button'
import Input from '../../../components/inputs/input'
import CustomSwitch from '../../../components/inputs/switch'
import Select from '../../../components/inputs/select'

// Style
import * as S from './style'
import ContentTitle from '../../../components/titles/content-title'

// ---

const NewPlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tipo = location.state?.tipo || 'contratante';

  const [planData, setPlanData] = useState({
    planTitle: '',
    enabled: false,
    period: 'Mensal',
    type: `${tipo}`,
    values: '', // Inicialize como um número
  });

  const handleCreateButton = async (planData: PlanData) => {
    const values = typeof planData.values === 'string' ? parseFloat(planData.values) : planData.values;
  
    const dataToSend = { ...planData, values };
  
    try {
      await createPlan(dataToSend);
      navigate('/planos');
    } catch (error) {
      console.error('Erro ao criar ou atualizar o plano: ', error);
    }
  };

  return (
    <>
      <BackToPageButton link="/planos" name="Novo plano" />
      <WhiteBackground>
        <ContentTitle title={`Novo plano - ${tipo}`} />
        <S.InputSwitchSelectWrapper>
          <Input
            id="plan-title"
            placeholder="Insira um título para o plano."
            label="Título do Plano"
            width="large"
            value={planData.planTitle}
            onChange={e => setPlanData({ ...planData, planTitle: e.target.value })}
          />
          <S.SwitchWrapper>
            <CustomSwitch checked={planData.enabled} label={planData.enabled ? 'Ativo' : 'Inativo'} />
          </S.SwitchWrapper>
          <Select label="Período" id="period" options={['Mensal', 'Semanal', 'Trimestral']} onChange={e => setPlanData({ ...planData, period: e.target.value })} />
        </S.InputSwitchSelectWrapper>
        <S.InputMidButtonWrapper>
          <Input label="Valor" id="value" placeholder="R$00,00" width="small" value={planData.values} onChange={e => setPlanData({ ...planData, values: e.target.value })} />
          <MidButton variant="DEFAULT" name="Adicionar Promoção" showIcon={true} />
        </S.InputMidButtonWrapper>
        <S.LargeButtonhWrapper>
          <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={() => handleCreateButton(planData)} />
        </S.LargeButtonhWrapper>
      </WhiteBackground>
    </>
  )
}

export default NewPlanPage