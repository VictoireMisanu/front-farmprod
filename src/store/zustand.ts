import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { productProps } from "../components/card/product";

interface State {
  data: productProps[];
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
      appendData: (newData) => set((state) => ({ data: [...state.data, newData] })),
      removeData: (id) => set((state) => ({ data: state.data.filter((item) => item.productId !== id) })),
      reset: () => set({ data: [] }),
    }),
    {
      name: 'basket-storage', // nom de la clé dans le localStorage
    } as MyPersist
  )
);

export default useStore;
