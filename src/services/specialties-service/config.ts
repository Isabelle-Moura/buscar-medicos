import { AxiosResponse } from 'axios';
import api from '../api';

const token = localStorage.getItem('token');

// GET request
export const getSpecialties = async (page: number) => {
   try {
      const response: AxiosResponse<SpecialtiesApi> = await api.get(`/specialties`, {
         headers: { Authorization: `Bearer ${token}` },
         params: {
            page,
            size: 5,
         },
      });
      return response.data;
   } catch (error) {
      console.error(`There's an error with GET`, error);
   }
};

// GET request for search data
export const getSpecialtySearch = async (search: string) => {
   try {
      const response = await api.get(`/specialties`, {
         headers: { Authorization: `Bearer ${token}` },
         params: {
            search,
         },
      });
      return response.data.content;
   } catch (error) {
      console.error(`There's an error!`, error);
   }
};

// GET ID request
export const getSpecialtyById = async (itemId: number) => {
   try {
      const response: AxiosResponse<SpecialtyData> = await api.get(`/specialties/${itemId}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error) {
      console.error(`There's an error with GET by id`, error);
   }
};

// POST request
export const createSpecialty = async (specialtyData: SpecialtyData) => {
   try {
      const response = await api.post(`/specialties`, specialtyData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with POST`, error);
   }
};

// DELETE request
export const deleteSpecialty = async (itemId: number) => {
   try {
      const response = await api.delete(`/specialties/${itemId}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with DELETE`, error);
   }
};

// PUT request
export const updateSpecialty = async (itemId: number, specialtyData: SpecialtyData) => {
   try {
      const response = await api.put(`/specialties/${itemId}`, specialtyData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with PUT`, error);
   }
};
