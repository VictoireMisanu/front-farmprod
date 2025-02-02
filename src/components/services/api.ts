import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export const getProducts = async () => {
  console.log('fff');
  
  try {
    const response = await api.get('/');
    console.log('derftgh', response.status);
    
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error;
    
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du produit:', error);
    throw error;
    
  }
}

export const getFarms = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des fermiers:', error);
    throw error;
    
  }
};

export const registerAccountInfo = async (formData:FormData, url: string) => {
  try {
    formData.append('user_picture', url.toString());
    formData.forEach((value, key) => console.log(key, value));

    
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