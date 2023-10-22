// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

// Hooks
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// Table Service
import { deleteNotification, getNotificationSearch, getNotifications } from '../../../services/notification-service/config';

// Components
import IconAndTooltipButton from '../../buttons/small-button-with-icon';
import TableComponent from '../table-layout';
import SearchBar from '../../inputs/search-bar';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../modals/delete-confirmation';
import Pagination from '../../extras-components/pagination';

// Component Type
interface Props {
   selectedCategory: string;
}

// ---

const TableNotification = ({ selectedCategory }: Props) => {
   const [allNotifications, setAllNotifications] = useState<NotificationsData[]>([]); // State to store all datas
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
   const tHeadContent = ['Título', 'Data de envio', 'Ações'];

   // Effect to search and fetch
   useEffect(() => {
      const getAllNotifications = async () => {
         if (isSearching === false) {
            const notifications = await getNotifications(selectedCategory, currentPage);
            let notesFormatted: NotificationsData[] = [];

            if (notifications?.content) {
               notesFormatted = notifications?.content.reduce((acc, crr) => {
                  const notification: NotificationsData = {
                     id: crr.id,
                     title: crr.title,
                     sendingDate: crr.sendingDate.slice(0, 10),
                     actions: (
                        <div style={{ display: 'flex' }}>
                           <IconAndTooltipButton
                              icon={VisualizeIcon}
                              tooltip={VisualizeToolTip}
                              hover="#EDEDED"
                              onClick={() => navigate('/visualizar-notificacao', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-notificacao', { state: { id: crr.id } })} />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, notification];
               }, [] as NotificationsData[]);

               setAllNotifications(notesFormatted);
               setTotalPages(notifications.totalPages);
            }
         }
      };

      const intervalId = setInterval(() => {
         getAllNotifications();
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
            const searchResults = await getNotificationSearch(searchTerm);

            if (searchResults) {
               const notesFormatted = searchResults?.reduce((acc: any, crr: any) => {
                  const notification: NotificationsData = {
                     id: crr.id,
                     title: crr.title,
                     sendingDate: crr.sendingDate ? crr.sendingDate.slice(0, 10) : '-',
                     actions: (
                        <div style={{ display: 'flex' }}>
                           <IconAndTooltipButton
                              icon={VisualizeIcon}
                              tooltip={VisualizeToolTip}
                              hover="#EDEDED"
                              onClick={() => navigate('/visualizar-notificacao', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-notificacao', { state: { id: crr.id } })} />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, notification];
               }, [] as NotificationsData[]);

               setAllNotifications(notesFormatted);
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
         <TableComponent tHead={tHeadContent} tBody={allNotifications} />
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
                        await deleteNotification(itemId);
                        getNotifications(selectedCategory, currentPage);
                        navigate('/notificacoes');
                     }
                  } catch (error) {
                     console.error('Error at delete notification', error);
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

export default TableNotification;
