import { useState } from 'react';
import BackToPageButton from '../../../../../components/buttons/back-to-page-button';
import UserDataInfo from '../../../../../components/extras-components/user-data-info';
import MidButton from '../../../../../components/buttons/mid-button';
import LargeButton from '../../../../../components/buttons/large-button';
import Input from '../../../../../components/inputs/input';
import NewUserModal from '../../../../../components/modals/new-profile-page-modal';
import ContentTitle from '../../../../../components/titles/content-title';

type User = {
   id: number;
   name: string;
   email: string;
   password: string;
};

const AllProfiles = () => {
   const [users, setUsers] = useState<User[]>([
      {
         id: 1,
         name: 'Isabelle Moura',
         email: 'mourabisabelle@email.com',
         password: 'hamsterdafoto',
      },
      {
         id: 2,
         name: 'Maria Santos',
         email: 'mariasantos@email.com',
         password: '12345senha',
      },
      {
         id: 3,
         name: 'Pedro Oliveira',
         email: 'pedrooliveira@email.com',
         password: 'minhaSenha',
      },
      {
         id: 4,
         name: 'Ana Pereira',
         email: 'anapereira@email.com',
         password: '987senha',
      },
      {
         id: 5,
         name: 'Carlos Rodrigues',
         email: 'carlosrodrigues@email.com',
         password: 'senhaSegura456',
      },
   ]);

   const [selectedUser, setSelectedUser] = useState<User | null>(null);

   const selectUser = (user: User) => {
      setSelectedUser(user);
   };

   const [modalOpen, setModalOpen] = useState(false);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
   });

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const handleCreateUser = () => {
      const newUserId = users.length + 1;

      const createdUser = {
         id: newUserId,
         name: newUser.name,
         email: newUser.email,
         password: newUser.password,
      };

      setUsers([...users, createdUser]);

      setNewUser({
         name: '',
         email: '',
         password: '',
      });

      closeModal();
   };

   const goBackToList = () => {
      setSelectedUser(null);
   };

   return (
      <>
         {selectedUser ? (
            <>
               <BackToPageButton onClick={goBackToList} name={selectedUser.name} />
               <UserDataInfo infoTitle="Nome" infoContent={selectedUser.name} />
               <UserDataInfo infoTitle="E-mail" infoContent={selectedUser.email} />
               <UserDataInfo infoTitle="Senha" infoContent={selectedUser.password} />
            </>
         ) : (
            <>
               <div>
                  {users.map((user) => (
                     <div key={user.id} onClick={() => selectUser(user)} style={{ cursor: 'pointer' }}>
                        <UserDataInfo infoTitle={user.name} infoContent={user.email} />
                     </div>
                  ))}
               </div>
               <div style={{ marginTop: '15px' }}>
                  <MidButton name="Novo Perfil" variant="DEFAULT" showIcon={true} onClick={openModal} />
               </div>
               {modalOpen && (
                  <NewUserModal onClose={closeModal}>
                     <div style={{ marginLeft: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                           <ContentTitle title="Novo perfil" />
                           <div style={{ cursor: 'pointer', marginLeft: '190px', fontSize: '20px' }} onClick={closeModal}>
                              &times;
                           </div>
                        </div>
                        <Input label="Nome" id="name" placeholder="" width="large" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                        <Input label="E-mail" id="email" placeholder="" width="large" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        <Input
                           label="Senha"
                           id="password"
                           placeholder=""
                           width="large"
                           value={newUser.password}
                           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        />
                        <Input label="Confirmar senha" id="confirmPassword" placeholder="" width="large" />
                        <div style={{ marginTop: '18px' }}>
                           <LargeButton name="Salvar alterações" type="submit" variant="DEFAULT" onClick={handleCreateUser} />
                        </div>
                     </div>
                  </NewUserModal>
               )}
            </>
         )}
      </>
   );
};

export default AllProfiles;
