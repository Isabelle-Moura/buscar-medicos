// import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getRegisterUsers = async (page: number) => {
  try {
    const users = await api.get(`/users`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        page,
        size: 5,
      },
    })
    return users.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}

export const getCounterTotalUsers = async () => {
  try {
    const totalAllUsers = await api.get(`/users/count`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return totalAllUsers.data
  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}