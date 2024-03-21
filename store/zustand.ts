import { Icon } from "@/lib/icons";
import { create } from "zustand";

type SearchStore = {
  color: string;
  setColor: (color: string) => void;
  resetColor: () => void;
  query: string;
  setQuery: (query: string) => void;
  iconType: number;
  setIconType: (iconType: number) => void;
  selectedIcon: Icon | null;
  setSelectedIcon: (selectedIcon: Icon) => void;
  clearSelectedIcon: () => void;
  isModalShown: boolean;
  hideModal: () => void;
  showModal: () => void;
  heroRef: React.RefObject<HTMLDivElement>;
};

export const useSearchStore = create<SearchStore>((set) => ({
  color: "#25314C",
  setColor: (color) => set({ color }),
  resetColor: () => set({ color: "#25314C" }),
  query: "",
  setQuery: (query) => set({ query }),
  iconType: 0,
  setIconType: (iconType) => set({ iconType }),
  selectedIcon: null,
  setSelectedIcon: (selectedIcon) => set({ selectedIcon }),
  clearSelectedIcon: () => set({ selectedIcon: null }),
  isModalShown: false,
  hideModal: () => set({ isModalShown: false }),
  showModal: () => set({ isModalShown: true }),
  heroRef: { current: null },
}));
