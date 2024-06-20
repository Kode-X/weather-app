// src/store.ts
import create from 'zustand';

interface AppState {
  activeTab: string | null;
  activeSong: string | null;
  setActiveTab: (tabName: string) => void;
  setActiveSong: (songName: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: null,
  activeSong: null,
  setActiveTab: (tabName: string) => set({ activeTab: tabName }),
  setActiveSong: (songName: string) => set({ activeSong: songName }),
}));