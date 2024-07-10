// src/store/apiStore.ts

import { create } from "zustand";

interface Church {
  churchName: string;
  churchId: number;
  profilePicture: string | null;
  totalStreams: number;
  totalLikes: number;
  totalSubscribers: number;
}

interface NewlyRegistered {
  id: number;
  address: string;
  province: string;
  churchName: string;
  description: string;
  email: string;
  city: string;
  logo: null | string;
  doc: string | undefined;
  county: null;
  zipCode: number;
}

interface State {
  church: Church[];
  setChurch: (church: Church[]) => void;
  fullName: string;
  setFullName: (fullName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  role: string | null;
  setRole: (role: string) => void;
  newlyRegistered: NewlyRegistered[];
  setNewlyRegistered: (newlyRegistered: NewlyRegistered[]) => void;
}

export const useApiStore = create<State>((set) => ({
  church: [],
  setChurch: (church) => set({ church }),
  fullName: "",
  setFullName: (fullName) => set({ fullName }),
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  role: null,
  setRole: (role) => set({ role }),
  newlyRegistered: [],
  setNewlyRegistered: (newlyRegistered) => set({ newlyRegistered }),
}));
