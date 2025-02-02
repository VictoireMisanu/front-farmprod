import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const getProducts = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error;
    
  }
};

export const getFarms = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des fermiers:', error);
    throw error;
    
  }
};

export const registerAccountInfo = async (formData:FormData) => {
  try {
    const response = await api.post('/signup', formData)
    return response
  } catch (error) {
    console.error("Erreur lors de la création du compte", error);
    throw error;
    
  }
};

export const authenticateUser = async (formData:FormData) => {
  try {
    const response = await api.post('/signin', formData)
    return response.data
  } catch (error) {
    console.error("Erreur lors de l'authentification", error);
    throw error;
    
  }
};