import { create } from 'zustand';

export interface AppState {
  userId: string;
  setUserId: (userId: string) => void;
}

export const useZustandState = create<AppState>((set) => ({
  userId: '',
  setUserId: (id: string) => {
    set(() => ({ userId: id }));
  },
}));
