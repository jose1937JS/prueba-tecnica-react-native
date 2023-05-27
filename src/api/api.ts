import axios, { AxiosResponse } from "axios";

const http = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // Manejar error de autenticación
      } else if (error.response.status === 404) {
        // Manejar error de recurso no encontrado
      } else {
        // Manejar otros errores
      }
      return Promise.reject(error);
    }
  );

export default http