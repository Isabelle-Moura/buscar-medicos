// Service
import { deleteSpecialty, getSpecialties } from '../../../services/specialties-service/config';

//Hooks
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';
import IconAndTooltipButton from '../../buttons/small-button-with-icon';

// Components
import DeleteConfirmation from '../../modals/delete-confirmation';
import CustomSwitch from '../../inputs/switch';
import TableComponent from '../table-layout';
import SearchBar from '../../inputs/search-bar';

// Component Type
type SpecialtyTable = {
   id: number;
   name: string;
   enabled: ReactNode;
   actions: ReactNode;
};

// ---

const TableSpecialties = () => {
   const [specialties, setSpecialties] = useState<SpecialtyTable[]>([]);
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

   const tHeadContent = ['Nome especialidade', 'Situação', 'Ações'];

   useEffect(() => {
      const fetchSpecialties = async () => {
         const result = await getSpecialties();
         const specialtiesFormatted = result?.reduce((acc: any, crr: any) => {
            const specialty = {
               id: crr.id,
               name: crr.name,
               enabled: <CustomSwitch checked={crr.enabled} label={crr.enabled ? ' Ativo' : ' Inativo'} />,
               actions: (
                  <div style={{ display: 'flex' }}>
                     <IconAndTooltipButton
                        icon={VisualizeIcon}
                        tooltip={VisualizeToolTip}
                        hover="#EDEDED"
                        onClick={() => navigate('/visualizar-especialidade', { state: { id: crr.id } })}
                     />
                     <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-especialidade', { state: { id: crr.id } })} />
                     <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                  </div>
               ),
            };
            return [...acc, specialty];
         }, [] as SpecialtyData[]);
         setSpecialties(specialtiesFormatted ?? []);
      };

      const intervalId = setInterval(() => {
         fetchSpecialties();
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, [navigate]);

   return (
      <>
         <SearchBar />
         <TableComponent tHead={tHeadContent} tBody={specialties} />
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
                        await deleteSpecialty(itemId);
                        getSpecialties();
                        window.location.reload();
                     }
                  } catch (error) {
                     console.error('Erro ao excluir a especialidade', error);
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

export default TableSpecialties;
