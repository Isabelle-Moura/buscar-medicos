import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

export const getPlans = async (type: string) => {
  try {
    const response: AxiosResponse<PlansAPI> = await api.get(`/plans?type=${type}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de GET', error)
  }
}

export const getPlansCounter = async (type: string) => {
  try {
    const response: AxiosResponse<PlansAPI> = await api.get(`/plans?type=${type}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.numberOfElements
  } catch (error) {
    console.error('Ocorreu um erro na requisição de GET', error)
  }
}

export const getPlanById = async (id: number) => {
  try {
    const response: AxiosResponse<PlanData> = await api.get(`/plans/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error('Ocorreu um erro na requisição de GET', error)
  }
}

export const createPlan = async (planData: PlanData) => {
  try {
    const response = await api.post(`/plans`, planData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de POST', error)
  }
}

export const updatePlan = async (planId: number, planData: PlanData) => {
  try {
    const response = await api.put(`/plans/${planId}`, planData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de PUT', error)
  }
}

export const deletePlan = async (itemId: number) => {
  try {
    const response = await api.delete(`/plans/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error('Ocorreu um erro na requisição de DELETE', error)
  }
}