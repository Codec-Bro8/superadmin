// src/store/apiStore.ts

import { create } from "zustand";

interface Church {
  churchName: string;
  churchId: number;
  profilePicture: string | null;
  totalStreams: number;
  totalLikes: number;
  totalSuscribers: number;
}

interface State {
  church: Church[];
  setChurch: (church: Church[]) => void;
  fullName: string;
  setFullName: (fullName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (Password: string) => void;
  role: string | null;
  setRole: (role: string) => void;
}

export const useApiStore = create<State>((set) => ({
  church: [],
  setChurch: (church) => set({ church }),
  fullName: "",
  setFullName: (e: any) => set(e.target.value),
  email: "",
  setEmail: (e: any) => set(e.target.value),
  password: "",
  setPassword: (e: any) => set(e.target.value),
  role: null,
  setRole: (role) => set({ role }),
}));
