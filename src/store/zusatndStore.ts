// src/store/apiStore.ts

import { create } from "zustand";

interface Users {
  churchName: string;
  churchId: number;
  profilePicture: string | null;
  description: string;
  totalPost: number;
  totalSubscribers: number;
  following: boolean;
}

interface Church {
  churchName: string;
  churchId: number;
  profilePicture: string | null;
  totalStreams: number;
  totalLikes: number;
  totalSubscribers: number;
}

interface ChurchVideos {
  live: boolean;
  seriesId: number | null;
  visibility: string;
  description: string;
  thumbnail: string | null;
  videoUrl: string | null;
  streamId: string;
  streamIdExt: string;
  churchName: string;
  tags: string;
  logo: string | null;
  callId: string;
  comment: boolean;
  liveNow: boolean;
  title: string;
  date: string;
}

interface Videos {
  id: number;
  title: string;
  description: string;
  callId: string;
  visibility: string;
  tags: string;
  comment: boolean;
  time: string;
  live: boolean;
  // videoUrl: null;
  // thumbnail: null;
  // series: null;
}

interface Audio {
  id: number;
  type: string;
  audioUrl: string;
  imageUrl: string;
  title: string;
  artiste: string;
  featuring: string | null;
  visibility: string;
  date: string;
  listens: number;
  // album: null;
}

interface Blog {
  id: number;
  header: string;
  image: string;
  link: string | null;
  content: string;
  totalLikes: number;
  totalComments: number;
  comment: string[];
  church: Church;
  // church: {
  //   id: 3;
  //   description: "bible believing church";
  //   churchName: "qadfhhgseefQWDDGTF";
  //   website: "www.church.com";
  //   address: "church street";
  //   province: "heaven";
  //   city: "city of david";
  //   country: "NG";
  //   zip: "070033";
  //   logo: "qadfhhgseefQWDDGTF";
  //   doc: null;
  // };
}

interface Devotion {
  header: string;
  content: string;
  time: string;
  church: Church;
  // church: {
  //   id: 3;
  //   description: "bible believing church";
  //   churchName: "qadfhhgseefQWDDGTF";
  //   website: "www.church.com";
  //   address: "church street";
  //   province: "heaven";
  //   city: "city of david";
  //   country: "NG";
  //   zip: "070033";
  //   logo: "qadfhhgseefQWDDGTF";
  //   doc: null;
  // };
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
  users: Users[];
  setUsers: (users: Users[]) => void;
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
  videos: Videos[];
  setVideos: (videos: Videos[]) => void;
  churchVideos: ChurchVideos[];
  setChurchVideos: (churchVideos: ChurchVideos[]) => void;
  audios: Audio[];
  setAudios: (audios: Audio[]) => void;
  blogs: Blog[];
  setBlogs: (blog: Blog[]) => void;
  devotion: Devotion[];
  setDevotion: (devotion: Devotion[]) => void;
}

export const useApiStore = create<State>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
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
  videos: [],
  setVideos: (videos) => set({ videos }),
  churchVideos: [],
  setChurchVideos: (churchVideos) => set({ churchVideos }),
  audios: [],
  setAudios: (audios) => set({ audios }),
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
  devotion: [],
  setDevotion: (devotion) => set({ devotion }),
}));
