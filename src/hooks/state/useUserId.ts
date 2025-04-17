import { create } from 'zustand';
import { UidState } from '../../types/types.ts';

export const useUserId = create<UidState>((set) => ({
  userId: '',
  setUserId: (id: string) => {
    set(() => ({ userId: id }));
  },
}));
