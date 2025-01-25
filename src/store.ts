import {create} from 'zustand'

type ToggleMenuStore = {
    isOpen: boolean,
    toggleMenu: () => void
}

export const useToggleMenuStore = create<ToggleMenuStore>((set) =>({
    isOpen: false,
    toggleMenu: () => set((state) => ({ isOpen:!state.isOpen })),
}))