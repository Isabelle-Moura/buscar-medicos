// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

// Hooks
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import { deletePlan, getPlans } from '../../../services/plans-service/config';

// Components
import TableComponent from '../table-layout';
import CustomSwitch from '../../inputs/switch';
import DeleteConfirmation from '../../modals/delete-confirmation';
import IconAndTooltipButton from '../../buttons/small-button-with-icon';
import SearchBar from '../../inputs/search-bar';

// Component Type
interface PlansData {
   id: number;
   period: string;
   values: string | number;
   enabled: ReactNode;
   actions: ReactNode;
}

interface Props {
   selectedCategory: string;
}

// ---

const TablePlans = ({ selectedCategory }: Props) => {
   const [allPlans, setAllPlans] = useState<PlansData[]>([]);
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);

   const navigate = useNavigate();

   const handleRemoveClick = (itemId: number) => {
      setItemToDeleteId(itemId);
      setShowDeleteConfirmation(true);
   };

   const closeModal = () => {
      setShowDeleteConfirmation(false);
   };

   const tHeadContent = ['Período', 'Valor', 'Situação', 'Ações'];

   useEffect(() => {
      const getAllPlans = async () => {
         const plans = await getPlans(selectedCategory);
         let plansFormatted: PlansData[] = [];

         if (plans) {
            plansFormatted = plans?.reduce((acc, crr) => {
               const plan: PlansData = {
                  id: crr.id,
                  period: crr.period.toUpperCase(),
                  values: crr.values !== null ? `R$ ${crr.values}` : 'R$ 00,00',
                  enabled: <CustomSwitch checked={crr.enabled} label={crr.enabled ? ' Ativo' : ' Inativo'} />,
                  actions: (
                     <div style={{ display: 'flex' }}>
                        <IconAndTooltipButton
                           icon={VisualizeIcon}
                           tooltip={VisualizeToolTip}
                           hover="#EDEDED"
                           onClick={() => navigate('/visualizar-plano', { state: { id: crr.id } })}
                        />
                        <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-plano', { state: { id: crr.id } })} />
                        <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                     </div>
                  ),
               };
               return [...acc, plan];
            }, [] as PlansData[]);

            setAllPlans(plansFormatted);
         }
      };

      getAllPlans();
   }, [selectedCategory]);

   return (
      <>
         <SearchBar />
         <TableComponent tHead={tHeadContent} tBody={allPlans} />
         {showDeleteConfirmation && (
            <DeleteConfirmation
               onClose={closeModal}
               onCancel={() => {
                  setShowDeleteConfirmation(false);
                  setItemToDeleteId(null);
               }}
               onConfirm={async (itemId) => {
                  try {
                     if (itemId !== null) {
                        await deletePlan(itemId);
                        getPlans(selectedCategory);
                        window.location.reload();
                     }
                  } catch (error) {
                     console.error('Error at delete plan', error);
                  } finally {
                     setShowDeleteConfirmation(false);
                     setItemToDeleteId(null);
                  }
               }}
               itemId={itemToDeleteId}
            />
         )}
      </>
   );
};

export default TablePlans;
