// Componentes
import TableComponent from '../table-layout';
import Pagination from '../../extras-components/pagination';
import SearchBar from '../../inputs/search-bar';

// Service
import { getRegisterUsers, getSearch, getUsersByType } from '../../../services/users-service/config';

// Hooks
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

// Conponent Type
interface Props {
   selectedCategory: string;
}

const TableRegisterUsers = ({ selectedCategory }: Props) => {
   const [allUserData, setAllUserData] = useState<RegisteredUserAPI[]>([]); // State to store all datas
   const [currentPage, setCurrentPage] = useState(0); // State to control the current page
   const [totalPages, setTotalPages] = useState(0); // State to store the total number of pages
   const [isSearching, setIsSearching] = useState(false); // State to control whether a search is happening or not

   // Table header
   const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário'];

   const navigate = useNavigate(); // Hook for navigation

   // Function to handle user click in each row
   const handleUserClick = (user: RegisteredUserData) => {
      navigate(`/dados-do-usuario`, { state: { user } });
   };

   // Effect to search and fetch
   useEffect(() => {
      const fetchData = async () => {
         if (isSearching === false) {
            let usersData;
            if (selectedCategory === 'Médicos') {
               usersData = await getUsersByType('MEDICO', currentPage);
            }
            if (selectedCategory === 'Contratantes') {
               usersData = await getUsersByType('CONTRATANTE', currentPage);
            }
            if (selectedCategory === 'Todos') {
               usersData = await getRegisterUsers(currentPage);
            }

            if (usersData?.content) {
               const usersFormatted = usersData?.content.reduce((acc: any, crr: any) => {
                  const data: RegisteredUserData = {
                     id: crr.id,
                     user: `${crr.firstName + ' ' + crr.lastName}` || '-',
                     email: crr.email || '-',
                     whatsapp: crr.phone || '-',
                     speciality: crr.specialties.name || '-',
                     city: crr.address || '-',
                     state: crr.address || '-',
                     userType: crr.profiles.length > 0 ? crr.profiles[0].name : '-',
                  };
                  return [...acc, data];
               }, [] as RegisteredUserAPI[]);

               setAllUserData(usersFormatted);
               setTotalPages(usersData.totalPages);
            }
         }
      };

      const intervalId = setInterval(() => {
         fetchData();
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
            const searchResults = await getSearch(searchTerm);

            if (searchResults) {
               const usersFormatted = searchResults?.reduce((acc: any, crr: any) => {
                  const data: RegisteredUserData = {
                     id: crr.id,
                     user: `${crr.firstName + ' ' + crr.lastName}` || '-',
                     email: crr.email || '-',
                     whatsapp: crr.phone || '-',
                     speciality: crr.specialties.name || '-',
                     city: crr.address || '-',
                     state: crr.address || '-',
                     userType: crr.profiles.length > 0 ? crr.profiles[0].name : '-',
                  };
                  return [...acc, data];
               }, [] as RegisteredUserAPI[]);
               setAllUserData(usersFormatted);
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
         <TableComponent tHead={tHeadContent} tBody={allUserData} onUserClick={handleUserClick} />
         <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={handlePageChange} />
      </>
   );
};

export default TableRegisterUsers;
