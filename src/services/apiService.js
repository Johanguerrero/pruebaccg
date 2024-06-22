// src/services/apiService.js

import axios from 'axios';
import { API_URL } from '../config/config';

const apiService = {
  async obtenerUsuarios() {
    try {
      const response = await axios.get(`${API_URL}/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  },

  async registrarUsuario(datosUsuario) {
    try {
      const response = await axios.post(`${API_URL}/usuarios`, datosUsuario);
      return response.data;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  },

  async suscribirUsuario(email) {
    try {
      const response = await axios.post(`${API_URL}/suscripciones`, { email });
      return response.data;
    } catch (error) {
      console.error('Error al suscribir usuario:', error);
      throw error;
    }
  },

  // Otras funciones para interactuar con diferentes endpoints de la API
};

export default apiService;
