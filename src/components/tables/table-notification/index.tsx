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
   const [allNotifications, setAllNotifications] = useState<NotificationsData[]>([]);
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

   const tHeadContent = ['Título', 'Data de envio', 'Ações'];

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
