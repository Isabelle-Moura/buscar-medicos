// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png';
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png';
import EditIcon from '../../../assets/icons/edit.png';
import EditToolTip from '../../../assets/icons/editTooltip.png';
import RemoveIcon from '../../../assets/icons/delete.png';
import RemoveToolTip from '../../../assets/icons/removeTooltip.png';

// Table Service
import { deleteQuestion, getQuestionSearch, getQuestions } from '../../../services/faq-service/config';

// Hooks
import { useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Components
import IconAndTooltipButton from '../../buttons/small-button-with-icon';
import TableComponent from '../table-layout';
import SearchBar from '../../inputs/search-bar';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../../modals/delete-confirmation';
import Pagination from '../../extras-components/pagination';

// Component Type
interface QuestionsData {
   id: number;
   title: string;
   actions: ReactNode;
}

interface Props {
   selectedCategory: string;
}

// ---

const TableFaq = ({ selectedCategory }: Props) => {
   const [allQuestions, setAllQuestions] = useState<QuestionsData[]>([]); // State to store all datas
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
   const tHeadContent = ['Título', 'Ações'];

   // Effect to search and fetch
   useEffect(() => {
      const getAllQuestions = async () => {
         if (isSearching === false) {
            const questions = await getQuestions(selectedCategory, currentPage);
            let questionsFormatted: QuestionsData[] = [];

            if (questions?.content) {
               questionsFormatted = questions?.content.reduce((acc, crr) => {
                  const question: QuestionsData = {
                     id: crr.id,
                     title: crr.title,
                     actions: (
                        <div style={{ display: 'flex' }}>
                           <IconAndTooltipButton
                              icon={VisualizeIcon}
                              tooltip={VisualizeToolTip}
                              hover="#EDEDED"
                              onClick={() => navigate('/visualizar-faq', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-faq', { state: { id: crr.id } })} />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, question];
               }, [] as QuestionsData[]);

               setAllQuestions(questionsFormatted);
               setTotalPages(questions.totalPages);
            }
         }
      };

      const intervalId = setInterval(() => {
         getAllQuestions();
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
            const searchResults = await getQuestionSearch(searchTerm);

            if (searchResults) {
               const questionsFormatted = searchResults?.reduce((acc: any, crr: any) => {
                  const question: QuestionsData = {
                     id: crr.id,
                     title: crr.title,
                     actions: (
                        <div style={{ display: 'flex' }}>
                           <IconAndTooltipButton
                              icon={VisualizeIcon}
                              tooltip={VisualizeToolTip}
                              hover="#EDEDED"
                              onClick={() => navigate('/visualizar-faq', { state: { id: crr.id } })}
                           />
                           <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" onClick={() => navigate('/editar-faq', { state: { id: crr.id } })} />
                           <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={() => handleRemoveClick(crr.id)} />
                        </div>
                     ),
                  };
                  return [...acc, question];
               }, [] as QuestionsData[]);

               setAllQuestions(questionsFormatted);
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
         <TableComponent tHead={tHeadContent} tBody={allQuestions} />
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
                        await deleteQuestion(itemId);
                        getQuestions(selectedCategory, currentPage);
                        navigate('/faq');
                     }
                  } catch (error) {
                     console.error('Error at delete question', error);
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

export default TableFaq;
