import { create } from "zustand";

interface AppStore {
  isOpen: boolean;
  isScrolled: boolean;
  activeTab: string; // Nouvel état pour l'onglet actif
  setIsScrolled: (isScrolled: boolean) => void;
  setActiveTab: (tab: string) => void; // Fonction pour mettre à jour l'onglet actif
  toggleMenu: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isOpen: false,
  isScrolled: false,
  activeTab: "#accueil",
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
