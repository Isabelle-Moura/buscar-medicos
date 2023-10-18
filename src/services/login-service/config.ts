import { AxiosResponse } from 'axios';
import api from '../api';

export const LoginService = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(`public/register/login?email=${email}&password=${password}`);

    console.log('Login API Response:', userData.data);

    const { token } = userData.data; // Acessar o token diretamente
    
    localStorage.setItem('token', token);
    api.defaults.headers.Authorization = token;

    return { success: true };
  } catch (error) {
    console.error('Login API Error:', error);
  }
};

const token = localStorage.getItem('token')

export const UserMe = async () => {
  try {
    const userMeData: AxiosResponse<UserMeApi> = await api.get(`/me`, {
      headers: { Authorization: token }
    });

    const firstName = userMeData.data.firstName 
    const userEmail = userMeData.data.email

    localStorage.setItem('name', firstName);
    localStorage.setItem('email', userEmail);

    return userMeData.data

  } catch (error) {
    console.error('Ocorreu um erro!', error)
  }
}
