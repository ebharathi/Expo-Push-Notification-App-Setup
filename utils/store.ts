import { create } from 'zustand';

import { UserProps } from './types';

interface AppState {
    user: UserProps | null,
    setUser: (data: any) => void;
}


export const useAppStore = create<AppState>((set) => ({
    user: null,
    setUser: (data) => set({ user: data })
}))