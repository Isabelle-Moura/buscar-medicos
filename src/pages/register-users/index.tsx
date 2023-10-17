// Components
import Category from '../../components/extras-components/category'
import TableRegisterUsers from '../../components/tables/table-register-users'
import PageTitle from '../../components/titles/page-title' 
import WhiteBackground from '../../components/extras-components/white-background'

// Service
import { getCounterTotalUsers, getRegisterUsers } from '../../services/users-service/config'

// Hooks
import { useEffect, useState } from 'react'
import SearchAndTotal from '../../components/register-users-components/search-and-total'
import Pagination from '../../components/extras-components/pagination'

// ---

const RegisterUsersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | 'Médicos' | 'Contratantes'>('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]); // Alterei o tipo para array para corresponder à sua lista de usuários
  const [allDoctors, setAllDoctors] = useState(0);
  const [allContractors, setAllContractors] = useState(0);

  const handleCategoryChange = (category: 'Todos' | 'Médicos' | 'Contratantes') => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const counterAllUsers = async () => {
      const allUsersData = await getCounterTotalUsers();
      if (allUsersData) {
        setAllUsers(allUsersData.total);
        setAllDoctors(allUsersData.totalDoctors);
        setAllContractors(allUsersData.totalContractor);
      }
    };

    const getAllUsers = async () => {
      const response = await getRegisterUsers();
      if (response) {
        setAllUsers(response);
      }
    };

    getAllUsers();
    counterAllUsers();
  }, []);

  return (
    <>
      <PageTitle title="Usuários Cadastrados |" category={selectedCategory} />
      <div style={{ display: 'flex', marginLeft: '15px' }}>
        <Category name="Todos" total={allUsers.length} onCategoryChange={() => handleCategoryChange('Todos')} />
        <Category name="Contratantes" total={allContractors} onCategoryChange={() => handleCategoryChange('Contratantes')} />
        <Category name="Médicos" total={allDoctors} onCategoryChange={() => handleCategoryChange('Médicos')} />
      </div>
      <WhiteBackground>
        <SearchAndTotal
          counter={selectedCategory === 'Todos' ? allUsers.length : selectedCategory === 'Contratantes' ? allContractors : selectedCategory === 'Médicos' ? allDoctors : 0}
        />
        <TableRegisterUsers
          users={allUsers.slice(
            (currentPage - 1) * 10, // Altere '10' para o número desejado de itens por página
            currentPage * 10 // Altere '10' para o número desejado de itens por página
          )}
          selectedCategory={selectedCategory}
        />

        {/* Agora, vamos usar o componente de paginação */}
        <Pagination
          items={allUsers}
          itemsPerPage={6}
          renderItem={(item, index) => (
            <div key={index}></div>
          )}
        />
      </WhiteBackground>
    </>
  );
};

export default RegisterUsersPage