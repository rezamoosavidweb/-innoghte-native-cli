import { create } from 'zustand';

import { createSelectors } from '@/utils';

type FaqsStoreState = {
  activeTab: number;
  query: string;
  setActiveTab: (value: number) => void;
  setQuery: (value: string) => void;
};

const _useFaqsStore = create<FaqsStoreState>((set) => ({
  activeTab: -1,
  query: '',
  setActiveTab: (value) => {
    set({ activeTab: value });
  },
  setQuery: (value) => {
    set({ query: value });
  },
}));

export const useFaqsStore = createSelectors(_useFaqsStore);
