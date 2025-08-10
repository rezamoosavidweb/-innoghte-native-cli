/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoreApi, UseBoundStore } from 'zustand';

import { getItem, removeItem, setItem } from '@/lib/storage';

const TOKEN = 'token';

export type TokenType = {
  access: string;
  refresh: string;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => {
  removeItem(TOKEN);
};
export const setToken = (value: TokenType) => {
  setItem(TOKEN, value);
};

type WithSelectors<S> = S extends { getState: () => infer T }
  ? { use: { [K in keyof T]: () => T[K] } } & S
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
