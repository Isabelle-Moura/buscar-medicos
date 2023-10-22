// Hooks
import { useEffect, useState } from 'react';

// Components
import TableComponent from '../table-layout';

// Table Service
import { getLastUsers } from '../../../services/dashboard-service/config';

// ---

const TableDashboard = () => {
   // Table header
   const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Tipo de Usuário'];

   // State to store user data
   const [userData, setUserData] = useState([]);
   console.log(userData);

   // State to store all user data
   const [allUserData, setAllUserData] = useState([]);

   // Effect that is executed when the component is mounted
   useEffect(() => {
      const getAllUsers = async () => {
         try {
            // Function to fetch all users
            const userData = await getLastUsers();
            if (userData) {
               // Setting user data in state
               setUserData(userData.content);

               // Mapping the data to a desired format
               let dataInfo: any = [];
               userData.content.map((item: any) => {
                  dataInfo.push({
                     user: `${item.firstName + ' ' + item.lastName}`,
                     email: item.email,
                     whatsapp: item.phone,
                     userType: item.profiles.length > 0 ? item.profiles[0].name : '-',
                  });
               });
               // Setting the data in state
               setAllUserData(dataInfo);
            }
         } catch (error) {
            console.error('Error in fetch users!', error);
         }
      };
      // Calling the function to fetch all users
      getAllUsers();
   }, []);

   return (
      <>
         {/* Renders the table component with the data */}
         <TableComponent tHead={tHeadContent} tBody={allUserData} />
      </>
   );
};

export default TableDashboard;
