import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Dessert, Entree, Plat, Salade } from "../sanity.types";

type ToggleMenuStore = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const useToggleMenuStore = create<ToggleMenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

interface ScrollState {
  isScrolled: boolean;
  activeTab: string; // Nouvel état pour l'onglet actif
  setIsScrolled: (isScrolled: boolean) => void;
  setActiveTab: (tab: string) => void; // Fonction pour mettre à jour l'onglet actif
}

export const useStore = create<ScrollState>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
  activeTab: "#accueil", // Onglet actif par défaut
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

interface MenuState {
  starters: Entree[];
  dishs: Plat[];
  desserts: Dessert[];
  salades: Salade[];
  getAllStarters: () => Entree[];
  getAllDishs: () => Plat[];
  getAllDesserts: () => Dessert[];
  getAllSalades: () => Salade[];
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      starters: [],
      dishs: [],
      desserts: [],
      salades: [],
      getAllStarters: () => get().starters,
      getAllDishs: () => get().dishs,
      getAllDesserts: () => get().desserts,
      getAllSalades: () => get().salades,
    }),
    {
      name: "menu-store",
    }
  )
);

export default useMenuStore;
