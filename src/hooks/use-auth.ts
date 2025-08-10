import { create } from 'zustand';

import {
  createSelectors,
  getToken,
  removeToken,
  setToken,
  TokenType,
} from '@/utils';

type AuthState = {
  hydrate: () => void;
  signIn: (data: TokenType) => void;
  signOut: () => void;
  status: 'idle' | 'signIn' | 'signOut';
  token: null | TokenType;
};

const _useAuth = create<AuthState>((set, get) => ({
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken) {
        get().signIn(userToken);
      } else  {
        get().signOut();
      }
    } catch (error) {
      // only to remove eslint error, handle the error properly
      console.error(error);
      // catch error here
      // Maybe sign_out user!
    }
  },
  signIn: (token) => {
    setToken(token);
    set({ status: 'signIn', token });
  },
  signOut: () => {
    removeToken();
    set({ status: 'signOut', token: undefined });
  },
  status: 'idle',
  token: null,
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => {
  _useAuth.getState().signOut();
};
export const signIn = (token: TokenType) => {
  _useAuth.getState().signIn(token);
};
export const hydrateAuth = () => {
  _useAuth.getState().hydrate();
};
