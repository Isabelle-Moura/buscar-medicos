// Hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Table Component
import TableComponent from '../table-layout'

// Table Service
import { getRegisterUsers } from '../../../services/users-service/config'

// ---

interface Props {
  selectedCategory: string
}

const TableRegisterUsers = ({ selectedCategory }: Props) => {
  const tHeadContent = ['Usuário', 'E-mail', 'Whatsapp', 'Especialidade', 'Cidade', 'Estado', 'Tipo de Usuário']

  // Function to generate a string of hyphens based on the text length
  const generateHyphens = (text: string) => '-'.repeat(text.length)

  const [allUserData, setAllUserData] = useState<RegisteredUserData[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const userData = await getRegisterUsers()
        if (userData) {
          let filteredData = userData.content.map((item: any) => ({
            id: item.id,
            user: `${item.firstName + ' ' + item.lastName}`,
            email: item.email,
            whatsapp: item.phone,
            speciality: item.specialties.name || generateHyphens('Especialidade'),
            city: item.city || generateHyphens('Cidade'),
            state: item.state || generateHyphens('Estado'),
            userType: item.profiles.length > 0 ? item.profiles[0].name : generateHyphens('Tipo de Usuário')
          }))

          if (selectedCategory === 'Médicos') {
            filteredData = filteredData.filter((user: { userType: string }) => user.userType === 'MEDICO')
          } else if (selectedCategory === 'Contratantes') {
            filteredData = filteredData.filter((user: { userType: string }) => user.userType === 'CONTRATANTE')
          }

          setAllUserData(filteredData)
        }
      } catch (error) {
        console.error('Erro ao pegar usuários!', error)
      }
    }

    getAllUsers()
  }, [selectedCategory])

  const handleUserClick = (id: number) => {
    navigate(`/dados-do-usuario/${id}`, { state: { message: 'Oi, eu fui redirecionado.', userId: id } });
  }

  return <TableComponent tHead={tHeadContent} tBody={allUserData} onUserClick={handleUserClick}/>
}

export default TableRegisterUsers