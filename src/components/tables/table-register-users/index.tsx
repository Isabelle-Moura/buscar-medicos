// Hooks
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import TableComponent from '../table-layout';
import Pagination from '../../extras-components/pagination';

// Service
import { getRegisterUsers, getUsersByType } from '../../../services/users-service/config';
import SearchBar from '../../inputs/search-bar';

// Component Type
interface Props {
  selectedCategory: string;
}

// ---

const TableRegisterUsers = ({ selectedCategory }: Props) => {
  const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário'];

  const [allUserData, setAllUserData] = useState<RegisteredUserAPI[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const handleUserClick = (user: RegisteredUserData) => {
    navigate(`/dados-do-usuario`, { state: { user } });
  };

  useEffect(() => {
    const fetchData = async () => {
      let usersData;
      if (selectedCategory === "Médicos") {
        usersData = await getUsersByType("MEDICO", currentPage);
      } 
      if (selectedCategory === "Contratantes") {
        usersData = await getUsersByType("CONTRATANTE", currentPage);
      } 
     if (selectedCategory === "Todos") {
       usersData = await getRegisterUsers(currentPage);
      }
  
      if (usersData?.content) {
        const usersFormatted = usersData?.content.reduce((acc: any, crr: any) => {
          const data: RegisteredUserData = {
            id: crr.id,
            user: `${crr.firstName + ' ' + crr.lastName}`,
            email: crr.email,
            whatsapp: crr.phone,
            speciality: crr.specialties.name || "-",
            city: crr.address || "-",
            state: crr.address || "-",
            userType: crr.profiles.length > 0 ? crr.profiles[0].name : "-"
          };
          return [...acc, data];
        }, [] as RegisteredUserAPI[]);
  
        setAllUserData(usersFormatted);
        setTotalPages(usersData.totalPages);
      }
    };
  
    fetchData();
  }, [selectedCategory, currentPage,]);

  const handlePageChange: Dispatch<SetStateAction<number>> = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <SearchBar />
      <TableComponent
        tHead={tHeadContent}
        tBody={allUserData}
        onUserClick={handleUserClick}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={handlePageChange} />
    </>
  );
};

export default TableRegisterUsers;