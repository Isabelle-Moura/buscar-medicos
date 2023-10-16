import { AxiosResponse } from 'axios'
import api from '../api'

export const LoginService = async (email: string, password: string) => {
  console.log(email, password)
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(`public/register/login?email=${email}&password=${password}`)

    console.log('Login API Response:', userData.data)

    const { token } = userData.data

    localStorage.setItem('token', token)
    api.defaults.headers.Authorization = token

    return { success: true }
  } catch (error) {
    console.error('Login API Error:', error)
  }
}
