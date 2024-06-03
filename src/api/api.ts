import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.11.217:8000/api/',
});

api.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Accept = 'application/json';
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);