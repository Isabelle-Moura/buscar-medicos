// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

// Hooks
import { useEffect, useState } from 'react';

// Table Service
import { deleteNotification, getNotifications } from '../../../services/notification-service/config';

// Components
import IconAndTooltipButton from '../../buttons/small-button-with-icon';
import TableComponent from '../table-layout';
import SearchBar from '../../inputs/search-bar';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../modals/delete-confirmation';

// Component Type
interface Props {
   selectedCategory: string;
}

// ---

const TableNotification = ({ selectedCategory }: Props) => {
   const [allNotifications, setAllNotifications] = useState<NotificationsData[]>([]);
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

   const tHeadContent = ['Título', 'Data de envio', 'Ações'];

   useEffect(() => {
      const getAllNotifications = async () => {
         const notifications = await getNotifications(selectedCategory);
         let notesFormatted: NotificationsData[] = [];

         if (notifications) {
            notesFormatted = notifications?.reduce((acc, crr) => {
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
         }
      };
      getAllNotifications();
   }, [selectedCategory]);

   return (
      <>
         <SearchBar />
         <TableComponent tHead={tHeadContent} tBody={allNotifications} />
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
                        getNotifications(selectedCategory);
                        window.location.reload();
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
