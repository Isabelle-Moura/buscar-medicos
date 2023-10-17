import api from '../api'

export const counterDashboard = async () => {
  try {
    const token = localStorage.getItem('token')
    const counterDashboard = await api.get(`/users/dashboard`, {
      headers: { Authorization: token }
    })
    return counterDashboard.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

export const getLastUsers = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await api.get(`/users?size=3`, {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

// Callendar Service
export const Callendar = () => {
  try {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toLocaleString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  } catch (error) {
    console.error('Something went wrong:', error);
    return 'Erro ao obter a data';
  }
}