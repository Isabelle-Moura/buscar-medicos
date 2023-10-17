import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getQuestions = async (type: string) => {
    try {
      const response: AxiosResponse<QuestionAPI> = await api.get(`/questions?type=${type}`, {
        headers: { Authorization: token }
      })
      return response.data.content
    } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error)
    }
  }