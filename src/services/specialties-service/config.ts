import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getSpecialties = async () => {
    try {
      const response: AxiosResponse<SpecialtiesApi> = await api.get(`/specialties`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      return response.data.content
    } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error)
    }
  }

  // export const getSpecialties = async () => {
  //   try {
  //     const response = await fetch(`https://api.buscarmedicos.izap.dev/specialties`, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       // mode: 'no-cors',
  //     });
  
  //     if (response.ok) {
  //       // Aqui você precisa analisar a resposta para o tipo correto
  //       const data: SpecialtiesApi[] = await response.json();
  //       return data;
  //     } else {
  //       console.error('Ocorreu um erro na requisição de GET');
  //     }
  //   } catch (error) {
  //     console.error('Ocorreu um erro na requisição de GET', error);
  //   }
  // };

export const createSpecialty = async () => {
  try {
    const response = await api.post(`/specialties`, {
      headers: { Authorization: `Bearer ${token}` },  
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de POST', error)
  }
}

export const deleteSpecialty = async (itemId: number) => {
  try {
    const response = await api.delete(`/specialties/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de DELETE', error)
  }
}
