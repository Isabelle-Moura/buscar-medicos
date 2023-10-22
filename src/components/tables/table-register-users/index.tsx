import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../table-layout';
import Pagination from '../../extras-components/pagination';
import { getRegisterUsers, getSearch, getUsersByType } from '../../../services/users-service/config';
import SearchBar from '../../inputs/search-bar';

interface Props {
   selectedCategory: string;
}

const TableRegisterUsers = ({ selectedCategory }: Props) => {
   const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário'];

   const [allUserData, setAllUserData] = useState<RegisteredUserAPI[]>([]);
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [isSearching, setIsSearching] = useState(false);

   const navigate = useNavigate();

   const handleUserClick = (user: RegisteredUserData) => {
      navigate(`/dados-do-usuario`, { state: { user } });
   };

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
