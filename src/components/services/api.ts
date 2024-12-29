import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333' // Ajustez l'URL selon votre configuration AdonisJS
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error;
  }
};