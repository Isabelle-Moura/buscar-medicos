// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

// Hooks
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import { deletePlan, getPlanSearch, getPlans } from '../../../services/plans-service/config';

// Components
import TableComponent from '../table-layout';
import CustomSwitch from '../../inputs/switch';
import DeleteConfirmation from '../../modals/delete-confirmation';
import IconAndTooltipButton from '../../buttons/small-button-with-icon';
import SearchBar from '../../inputs/search-bar';
import Pagination from '../../extras-components/pagination';

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
   const [allPlans, setAllPlans] = useState<PlansData[]>([]); // State to store all datas
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State to control display of delete confirmation
   const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null); // State to store the ID of item to be deleted
   const [currentPage, setCurrentPage] = useState(0); // State to control the current page
   const [totalPages, setTotalPages] = useState(0); // State to store the total number of pages
   const [isSearching, setIsSearching] = useState(false); // State to control whether a search is happening or not

   const navigate = useNavigate(); // Hook for navigation

   // Click handler for the delete action
   const handleRemoveClick = (itemId: number) => {
      setItemToDeleteId(itemId);
      setShowDeleteConfirmation(true);
   };

   // Function to close the confirmation modal
   const closeModal = () => {
      setShowDeleteConfirmation(false);
   };

   // Table header
   const tHeadContent = ['Período', 'Valor', 'Situação', 'Ações'];

   // Effect to search and fetch
   useEffect(() => {
      const getAllPlans = async () => {
         if (isSearching === false) {
            const plans = await getPlans(selectedCategory, currentPage);
            let plansFormatted: PlansData[] = [];

            if (plans?.content) {
               plansFormatted = plans?.content.reduce((acc, crr) => {
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
               setTotalPages(plans.totalPages);
            }
         }
      };

      const intervalId = setInterval(() => {
         getAllPlans();
      }, 2000);

      return () => {
         clearInterval(intervalId);
      };
   }, [selectedCategory, currentPage, isSearching]);

   // Function to perform the search
   const handleSearch = async (searchTerm: string) => {
      setIsSearching(true);
      if (isSearching === true) {
         try {
            const searchResults = await getPlanSearch(searchTerm);

            if (searchResults) {
               const plansFormatted = searchResults?.reduce((acc: any, crr: any) => {
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
         } catch (error) {
            console.error('Error while performing search:', error);
         } finally {
            setIsSearching(false);
         }
      }
   };

   // Change Page Handler
   const handlePageChange: Dispatch<SetStateAction<number>> = (newPage) => {
      setCurrentPage(newPage);
   };

   return (
      <>
         <SearchBar onSearch={(searchTerm) => handleSearch(searchTerm)} />
         <TableComponent tHead={tHeadContent} tBody={allPlans} />
         <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={handlePageChange} />
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
                        getPlans(selectedCategory, currentPage);
                        navigate('/planos');
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
