import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-farmprod.onrender.com'
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

// export const getUsers = async () => {
//   try {
//     const response = await api.get('/users');
//     return response.data;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des users et des produits:', error);
//     throw error;
    
//   }
// };