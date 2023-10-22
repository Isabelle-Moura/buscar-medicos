// Hooks
import { useEffect, useState } from 'react';

// Components
import TableComponent from '../table-layout';

// Table Service
import { getLastUsers } from '../../../services/dashboard-service/config';

// ---

const TableDashboard = () => {
   const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Tipo de Usuário'];

   const [userData, setUserData] = useState([]);
   console.log(userData);
   const [allUserData, setAllUserData] = useState([]);

   useEffect(() => {
      const getAllUsers = async () => {
         try {
            const userData = await getLastUsers();
            if (userData) {
               setUserData(userData.content);

               let dataInfo: any = [];
               userData.content.map((item: any) => {
                  dataInfo.push({
                     user: `${item.firstName + ' ' + item.lastName}`,
                     email: item.email,
                     whatsapp: item.phone,
                     userType: item.profiles.length > 0 ? item.profiles[0].name : '-----',
                  });
               });
               setAllUserData(dataInfo);
            }
         } catch (error) {
            console.error('Erro ao pegar usuários!', error);
         }
      };
      getAllUsers();
   }, []);

   return (
      <>
         <TableComponent tHead={tHeadContent} tBody={allUserData} />
      </>
   );
};

export default TableDashboard;
