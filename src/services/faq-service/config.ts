import { AxiosResponse } from 'axios';
import api from '../api';

const token = localStorage.getItem('token');

// GET request
export const getQuestions = async (type: string) => {
   try {
      const response: AxiosResponse<QuestionAPI> = await api.get(`/questions?type=${type}`, {
         headers: { Authorization: token },
      });
      return response.data.content;
   } catch (error) {
      console.error('Ocorreu um erro na requisição de GET', error);
   }
};

// GET ID request
export const getQuestionById = async (id: number) => {
   try {
      const response: AxiosResponse<QuestionData> = await api.get(`/questions/${id}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error) {
      console.error(`There's an error with GET by id`, error);
   }
};

// POST request
export const createQuestion = async (questionData: QuestionData) => {
   try {
      const response = await api.post(`/questions`, questionData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with POST`, error);
   }
};

// PUT request
export const updateQuestion = async (questionId: number, questionData: QuestionData) => {
   try {
      const response = await api.put(`/questions/${questionId}`, questionData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with PUT`, error);
   }
};

// DELETE request
export const deleteQuestion = async (itemId: number) => {
   try {
      const response = await api.delete(`/questions/${itemId}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.content;
   } catch (error) {
      console.error(`There's an error with DELETE`, error);
   }
};
