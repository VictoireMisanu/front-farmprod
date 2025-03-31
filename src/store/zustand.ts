import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { productProps } from "../components/card/product";

// Définir l'interface de l'état avec les commandes
interface State {
  data: productProps[];
  commands: commandProps[];
  userId?: number;
  appendData: (newData: productProps) => void;
  removeData: (id: number) => void;
  reset: () => void;
  setCommands: (commands: commandProps[]) => void;
}

// Interface pour la commande
export interface commandProps {
  command_date: Date;
  global_price: string;
  quantity: number;
  user: number;
  product: number;
}

// Définir les options de persistance
type MyPersist = PersistOptions<State>;

const useStore = create<State>()(
  persist<State>(
    (set) => ({
      data: [],
      commands: [],

      appendData: (newData) => {
        const users = JSON.parse(localStorage.getItem("user_info") || "{}");
        const userId = users.id;

        set((state) => {
          // Vérifier si le produit est déjà dans le panier
          const existingProductIndex = state.data.findIndex(
            (item) => item.productId === newData.productId
          );

          console.log("Index du produit trouvé:", existingProductIndex);
          
          if (existingProductIndex !== -1) {
            // Produit déjà dans le panier : mise à jour de la quantité
            const updatedData = [...state.data];
            updatedData[existingProductIndex] = {
              ...updatedData[existingProductIndex],
              quantity: updatedData[existingProductIndex].quantity + newData.quantity,
            };

            console.log("Quantité mise à jour :", updatedData[existingProductIndex]);
            return { data: updatedData };
          } else {
            // Nouveau produit, on l'ajoute avec userId
            const productWithUserId = { ...newData, userId };
            console.log("Produit ajouté :", productWithUserId);
            return { data: [...state.data, productWithUserId] };
          }
        });
      },

      removeData: (id) =>
        set((state) => ({
          data: state.data.filter((item) => item.productId !== id),
        })),

      reset: () => set({ data: [] }),

      setCommands: (commands) => set({ commands }),
    }),
    {
      name: "basket-storage",
    } as MyPersist
  )
);

export default useStore;
