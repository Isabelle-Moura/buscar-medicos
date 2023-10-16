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
export const Callendar = async (): Promise<string | any> => {
  try {
    const response = await fetch('http://worldclockapi.com/api/json/utc/now')
    const data = await response.json()

    const months = [
      { id: 1, name: 'Janeiro' },
      { id: 2, name: 'Fevereiro' },
      { id: 3, name: 'Março' },
      { id: 4, name: 'Abril' },
      { id: 5, name: 'Maio' },
      { id: 6, name: 'Junho' },
      { id: 7, name: 'Julho' },
      { id: 8, name: 'Agosto' },
      { id: 9, name: 'Setembro' },
      { id: 10, name: 'Outubro' },
      { id: 11, name: 'Novembro' },
      { id: 12, name: 'Dezembro' }
    ]

    const currentDateTime = new Date(data.currentDateTime)

    const day = currentDateTime.getDate()
    const month = currentDateTime.getMonth() + 1
    const year = currentDateTime.getFullYear()

    const currentMonth = months.find(months => months.id === month)

    if (!currentMonth) {
      throw new Error('Mês não encontrado')
    }

    const formattedDate = `${day} de ${currentMonth.name} de ${year}`
    return formattedDate
  } catch (error) {
    console.error('Ocorreu um erro ao obter a data atual:', error)
  }
}