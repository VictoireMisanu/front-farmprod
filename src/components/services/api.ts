import axios from 'axios';
// import useStore from '../../store/zustand';
import { commandProps } from '../../store/zustand';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333'
  // baseURL:'https://api-farmprod.onrender.com'
});

// Récupérer les produits
export const getProducts = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error;
  }
};

// Récupérer un produit spécifique par son ID
export const getProduct = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du produit:', error);
    throw error;
  }
};

// Récupérer les fermes
export const getFarms = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des fermiers:', error);
    throw error;
  }
};

// Inscription d'un nouvel utilisateur
export const registerAccountInfo = async (formData: FormData, url: string) => {
  try {
    console.log(url);
    
    formData.append('user_picture', url);
    // console.log(formData);
    
    // formData.forEach((value, key) => console.log(key, value)); // Juste pour déboguer

    const response = await api.post('/signup', formData);
    alert('Compte crée avec succès')
    return response.data;
  } catch (error) {
    alert('Erreur lors de la création du compte')
    console.error("Erreur lors de la création du compte", error);
    throw error;
  }
};

// Authentification de l'utilisateur
export const authenticateUser = async (formData: FormData) => {
  try {
    const response = await api.post('/signin', formData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'authentification", error);
    throw error;
  }
};

// Création d'une commande
export const createCommand = async (newCommands: commandProps[]) => {
  try {
    console.log("Données à envoyer:", newCommands); // Pour déboguer


    // Envoi des commandes au backend
    const response = await api.post('/command', { commands: newCommands }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Commande créée avec succès:", response.data);
    alert('votre commande a été éffectuée avec succès')
    return response.data;
  } catch (error) {
    alert('votre commande a échoué')
    console.error('Erreur lors de la création de la commande:', error);
    throw error;
  }
};
