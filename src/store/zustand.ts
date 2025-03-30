import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { productProps } from "../components/card/product";

// Définir l'interface de l'état avec les commandes
interface State {
  data: productProps[];
  commands: commandProps[];  // Ajouter un tableau de commandes
  userId?: number;
  appendData: (newData: productProps) => void;
  removeData: (id: number) => void;
  reset: () => void;
  setCommands: (commands: commandProps[]) => void; // Action pour mettre à jour les commandes
}

// Interface pour la commande (ajouter si nécessaire)
export interface commandProps {
  command_date: Date;
  global_price: string;
  quantity: number;
  // command_num: string;
  user: number; // Assurez-vous que le type correspond ici
  product: number;
}

// Définir les options de persistance correctement
type MyPersist = PersistOptions<State>;

const useStore = create<State>()(
  persist<State>(
    (set) => ({
      data: [],
      commands: [],  // Initialisation des commandes
      appendData: (newData) => {
        // Récupérer userId depuis localStorage
        const users = JSON.parse(localStorage.getItem('user_info') || '{}');
        const userId = users.id; // Assurez-vous que 'id' est la clé correcte

        // Ajouter le produit avec l'identifiant de l'utilisateur
        const productWithUserId = { ...newData, userId }; // Inclure userId dans newData

        return set((state) => ({
          data: [...state.data, productWithUserId] // Utiliser le produit avec userId
        }));
      },
      removeData: (id) => set((state) => ({
        data: state.data.filter((item) => item.productId !== id)
      })),
      reset: () => set({ data: [] }),
      
      // Ajouter une action pour définir les commandes
      setCommands: (commands) => set({ commands }),

    }),
    {
      name: 'basket-storage', // nom de la clé dans le localStorage
    } as MyPersist
  )
);

export default useStore;