import { create } from 'zustand';

import { createSelectors } from '@/utils';

type FaqsStoreState = {
  query: string;
  setQuery: (value: string) => void;
};

const _useFaqsStore = create<FaqsStoreState>((set) => ({
  query: '',
  setQuery: (value) => {
    set({ query: value });
  },
}));

export const useFaqsStore = createSelectors(_useFaqsStore);
