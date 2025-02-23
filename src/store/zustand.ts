import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { productProps } from "../components/card/product";

interface State {
  data: productProps[];
  userId?: number;
  appendData: (newData: productProps) => void;
  removeData: (id: number) => void;
  reset: () => void;
}

// Définir les options de persistance correctement
type MyPersist = PersistOptions<State>;

const useStore = create<State>()(
  persist<State>(
    (set) => ({
      data: [],
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
    }),
    {
      name: 'basket-storage', // nom de la clé dans le localStorage
    } as MyPersist
  )
);

export default useStore;
