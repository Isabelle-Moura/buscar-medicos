import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getSpecialties = async () => {
    try {
      const response: AxiosResponse<SpecialtiesApi> = await api.get(`/specialties`, {
        headers: { Authorization: token }
      })
      return response.data.content
    } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error)
    }
  }

export const createSpecialty = async () => {
  try {
    const response = await api.post(`/specialties`, {
      headers: { Authorization: token }
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de POST', error)
  }
}


