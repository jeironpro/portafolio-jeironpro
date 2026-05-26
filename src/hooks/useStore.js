import { create } from 'zustand';

export const useStore = create((set) => ({
    selectedProject: null,
    isModalOpen: false,
    selectProject: (project) => set({ selectedProject: project, isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false, selectedProject: null })
}));
