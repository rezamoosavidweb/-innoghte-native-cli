import { create } from "zustand";

import { createSelectors } from "../../utils";

interface SettingState {
  loading: boolean;
  toggleLoading: () => void;
  setLoading: (value: boolean) => void;
}

const _useSetting = create<SettingState>((set, get) => ({
  loading: false,
  toggleLoading: () => set({ loading: !get().loading }),
  setLoading: (value) => set({ loading: value }),
}));

export const useSetting = createSelectors(_useSetting);
