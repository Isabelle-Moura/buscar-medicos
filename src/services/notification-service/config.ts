import { AxiosResponse } from 'axios';
import api from '../api';

const token = localStorage.getItem('token');

// GET request
export const getNotifications = async (type: string) => {
   try {
      const response: AxiosResponse<NotificationAPI> = await api.get(`/notifications?type=${type}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.content;
   } catch (error) {
      console.error(`There's an error with GET`, error);
   }
};

// GET ID request
export const getNotificationById = async (id: number) => {
   try {
      const response: AxiosResponse<NotificationData> = await api.get(`/notifications/${id}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
   } catch (error) {
      console.error(`There's an error with GET by id`, error);
   }
};

// POST request
export const createNotification = async (notificationData: NotificationData) => {
   try {
      const response = await api.post(`/notifications`, notificationData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with POST`, error);
   }
};

// PUT request
export const updateNotification = async (notificationId: number, notificationData: NotificationData) => {
   try {
      const response = await api.put(`/notifications/${notificationId}`, notificationData, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, message: response.data.message };
   } catch (error) {
      console.error(`There's an error with PUT`, error);
   }
};

// DELETE request
export const deleteNotification = async (itemId: number) => {
   try {
      const response = await api.delete(`/notifications/${itemId}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.content;
   } catch (error) {
      console.error(`There's an error with DELETE`, error);
   }
};
