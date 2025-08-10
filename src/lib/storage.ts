import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function getItem<T>(key: string): T | undefined {
  const value = storage.getString(key);
  if (!value) return undefined;

  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

export function removeItem(key: string): void {
  storage.delete(key);
}

export function setItem(key: string, value: unknown): void {
  storage.set(key, JSON.stringify(value));
}
