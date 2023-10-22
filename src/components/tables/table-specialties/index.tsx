// Service
import { deleteSpecialty, getSpecialties, getSpecialtySearch } from '../../../services/specialties-service/config';

//Hooks
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
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
import Pagination from '../../extras-components/pagination';

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
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [isSearching, setIsSearching] = useState(false);

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
         if (isSearching === false) {
            const result = await getSpecialties(currentPage);
            if (result?.content) {
               const specialtiesFormatted = result?.content.reduce((acc: any, crr: any) => {
                  const specialty = {
                     id: crr.id,
                     name: crr.name || '-',
                     enabled: <CustomSwitch checked={crr.enabled} label={crr.enabled ? ' Ativo' : ' Inativo'} />,
                     actions: (
                        <div style={{ display: 'flex' }}>
                           <IconAndTooltipButton
                              icon={VisualizeIcon}
                              tooltip={VisualizeToolTip}
                              hover="#EDEDED"
                              onClick={() => navigate('/visualizar-especialidade', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton
                              icon={EditIcon}
                              tooltip={EditToolTip}
                              hover="#edf1fc"
                              onClick={() => navigate('/editar-especialidade', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, specialty];
               }, [] as SpecialtyData[]);
               setSpecialties(specialtiesFormatted ?? []);
               setTotalPages(result.totalPages);
            }
         }
      };

      const intervalId = setInterval(() => {
         fetchSpecialties();
      }, 2000);

      return () => {
         clearInterval(intervalId);
      };
   }, [navigate, currentPage, isSearching]);

   const handleSearch = async (searchTerm: string) => {
      setIsSearching(true);
      if (isSearching === true) {
         try {
            const searchResults = await getSpecialtySearch(searchTerm);

            if (searchResults) {
               const specialtiesFormatted = searchResults?.reduce((acc: any, crr: any) => {
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
                           <IconAndTooltipButton
                              icon={EditIcon}
                              tooltip={EditToolTip}
                              hover="#edf1fc"
                              onClick={() => navigate('/editar-especialidade', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, specialty];
               }, [] as SpecialtyData[]);

               setSpecialties(specialtiesFormatted);
            }
         } catch (error) {
            console.error('Error while performing search:', error);
         } finally {
            setIsSearching(false);
         }
      }
   };

   const handlePageChange: Dispatch<SetStateAction<number>> = (newPage) => {
      setCurrentPage(newPage);
   };

   return (
      <>
         <SearchBar onSearch={(searchTerm) => handleSearch(searchTerm)} />
         <TableComponent tHead={tHeadContent} tBody={specialties} />
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
                        await deleteSpecialty(itemId);
                        getSpecialties(currentPage);
                        navigate('/especialidades');
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
