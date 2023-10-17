import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getNotifications = async (type: string) => {
    try {
      const response: AxiosResponse<NotificationAPI> = await api.get(`/notifications?type=${type}`, {
        headers: { Authorization: token }
      })
      return response.data.content
    } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error)
    }
  }