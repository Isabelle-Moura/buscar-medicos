import { AxiosResponse } from 'axios'
import api from '../api'

const token = localStorage.getItem('token')

// GET request
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

// GET COUNTER request
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

// GET ID request
export const getPlanById = async (id: number) => {
  try {
    const response: AxiosResponse<PlanData> = await api.get(`/plans/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    console.error(`There's an error with GET by id`, error)
  }
}

// POST request
export const createPlan = async (planData: PlanData) => {
  try {
    const response = await api.post(`/plans`, planData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { success: true, message: response.data.message }
  } catch (error) {
    console.error(`There's an error with POST`, error);
  }
};

// PUT request
export const updatePlan = async (planId: number, planData: PlanData) => {
  try {
    const response = await api.put(`/plans/${planId}`, planData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return { success: true, message: response.data.message }
  } catch (error) {
    console.error(`There's an error with PUT`, error)
  }
}

// DELETE request
export const deletePlan = async (itemId: number) => {
  try {
    const response = await api.delete(`/plans/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.content
  } catch (error) {
    console.error(`There's an error with DELETE`, error)
  }
}