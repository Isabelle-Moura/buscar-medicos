// Components
import Category from '../../components/extras-components/category';
import TableRegisterUsers from '../../components/tables/table-register-users';
import PageTitle from '../../components/titles/page-title';
import WhiteBackground from '../../components/extras-components/white-background';

// Service
import { getCounterTotalUsers } from '../../services/users-service/config';

// Hooks
import { useEffect, useState } from 'react';
import SearchAndTotal from '../../components/register-users-components/search-and-total';

// ---

const RegisterUsersPage = () => {
   const [selectedCategory, setSelectedCategory] = useState<'Todos' | 'Médicos' | 'Contratantes'>('Todos');

   const [totalUsers, setTotalUsers] = useState(0);
   const [allDoctors, setAllDoctors] = useState(0);
   const [allContractors, setAllContractors] = useState(0);

   const handleCategoryChange = (category: 'Todos' | 'Médicos' | 'Contratantes') => {
      setSelectedCategory(category);
   };

   useEffect(() => {
      const counterAllUsers = async () => {
         const allUsersData = await getCounterTotalUsers();
         if (allUsersData) {
            setTotalUsers(allUsersData.total);
            setAllDoctors(allUsersData.totalDoctors);
            setAllContractors(allUsersData.totalContractor);
         }
      };

      counterAllUsers();
   }, [selectedCategory]);

   return (
      <>
         <PageTitle title="Usuários Cadastrados |" category={selectedCategory} />
         <div style={{ display: 'flex', marginLeft: '28px' }}>
            <Category name="Todos" total={totalUsers} onCategoryChange={() => handleCategoryChange('Todos')} />
            <Category name="Contratantes" total={allContractors} onCategoryChange={() => handleCategoryChange('Contratantes')} />
            <Category name="Médicos" total={allDoctors} onCategoryChange={() => handleCategoryChange('Médicos')} />
         </div>
         <WhiteBackground>
            <SearchAndTotal
               counter={selectedCategory === 'Todos' ? totalUsers : selectedCategory === 'Contratantes' ? allContractors : selectedCategory === 'Médicos' ? allDoctors : 0}
            />
            <TableRegisterUsers selectedCategory={selectedCategory} />
         </WhiteBackground>
      </>
   );
};

export default RegisterUsersPage;
