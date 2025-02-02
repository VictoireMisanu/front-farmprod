import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface State {
  data: [];
    appendData: (newData: any) => void;
    removeData: (id: string) => void;
    reset: () => void;
}

const useStore = create(
  persist(
    (set) => ({
      data: [],
      appendData: (newData) => set((state) => ({ data: [...state.data, newData] })),
      removeData: (id) => set((state) => ({ data: state.data.filter((item) => item.productId !== id) })),
      reset: () => set({ data: [] }),
    }),
    {
      name: 'basket-storage', // nom de la clé dans le localStorage
    }
  )
);

export default useStore;