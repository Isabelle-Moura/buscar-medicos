import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../table-layout';
import { getRegisterUsers } from '../../../services/users-service/config';

interface Props {
  selectedCategory: string;
}

const TableRegisterUsers = ({ selectedCategory }: Props) => {
  const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário'];
  const [allUserData, setAllUserData] = useState<RegisteredUserAPI[]>([]);
  const navigate = useNavigate();

  const generateHyphens = (text: string) => '-'.repeat(text.length);

  const handleUserClick = () => {
    navigate(`/dados-do-usuario`, { state: allUserData });
  }

  useEffect(() => {
    const getAllUsers = async () => {
      const usersData = await getRegisterUsers(0); // Ajuste a página conforme necessário

      if (usersData?.content) {
        const usersFormatted = usersData?.content.reduce((acc: any, crr: any) => {
          const data: RegisteredUserData = {
            id: crr.id,
            user: `${crr.firstName + ' ' + crr.lastName}`,
            email: crr.email,
            whatsapp: crr.phone,
            speciality: crr.specialties.name || generateHyphens('Especialidade'),
            city: crr.address || generateHyphens('Cidade'),
            state: crr.address || generateHyphens('Estado'),
            userType: crr.profiles.length > 0 ? crr.profiles[0].name : generateHyphens('Tipo de Usuário')
          };
          return [...acc, data];
        }, [] as RegisteredUserAPI[]);

        setAllUserData(usersFormatted);
      }
    }
    getAllUsers();
  }, [selectedCategory]);

  return (
    <TableComponent tHead={tHeadContent} tBody={allUserData} onUserClick={handleUserClick} />
  )
}

export default TableRegisterUsers;
