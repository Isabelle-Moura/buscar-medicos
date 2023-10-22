// Hooks
import { useState, useEffect } from 'react';

// Components
import UserDataInfo from '../../../../components/extras-components/user-data-info';
import ContentTitle from '../../../../components/titles/content-title';

// Service
import { UserMe } from '../../../../services/login-service/config';

const UserData = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {
      async function fetchData() {
         try {
            const response = await UserMe();
            if (response) {
               setName(response.firstName);
               setEmail(response.email);
            }
         } catch (error) {
            console.error("There's an error!", error);
         }
      }
      fetchData();
   }, []);

   return (
      <>
         <ContentTitle title="Dados" />
         <UserDataInfo infoTitle="Nome" infoContent={name} />
         <UserDataInfo infoTitle="E-mail" infoContent={email} />
      </>
   );
};

export default UserData;
