import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../table-layout';
import { getRegisterUsers } from '../../../services/users-service/config';
import Pagination from '../../extras-components/pagination'; // Importe o componente de paginação

interface Props {
  selectedCategory: string;
}

const TableRegisterUsers = ({ selectedCategory }: Props) => {
  const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário'];

  const [allUserData, setAllUserData] = useState<RegisteredUserAPI[]>([]);
  const [currentPage, setCurrentPage] = useState(0); // Estado da página atual
  const [totalPages, setTotalPages] = useState(0); // Estado do número total de páginas

  const navigate = useNavigate();

  const handleUserClick = (user: RegisteredUserData) => {
    navigate(`/dados-do-usuario`, { state: { user } });
  }

  useEffect(() => {
    const getAllUsers = async () => {
      const usersData = await getRegisterUsers(currentPage); // Passe a página atual para a função de busca

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

        // Atualize o número total de páginas
        setTotalPages(usersData.totalPages);
      }
    }
    getAllUsers();
  }, [selectedCategory, currentPage]);

  // Função de mudança de página
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  return (
    <>
      <TableComponent tHead={tHeadContent} tBody={allUserData} onUserClick={handleUserClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  )
}

export default TableRegisterUsers;