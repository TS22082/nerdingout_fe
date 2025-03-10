import { create } from 'zustand';

type UidState = {
  userId: string;
  setUserId: (userId: string) => void;
};

export const useUserId = create<UidState>((set) => ({
  userId: '',
  setUserId: (id: string) => {
    set(() => ({ userId: id }));
  },
}));
