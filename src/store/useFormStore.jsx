import { create } from 'zustand';

export const useFormStore = create((set) => ({
  registros: [], // Lista para almacenar múltiples registros
  addRegistro: (data) => set((state) => ({ registros: [...state.registros, data] })), // Añade un nuevo registro
  clearRegistros: () => set({ registros: [] }), // Opcional: para limpiar los registros
}));
