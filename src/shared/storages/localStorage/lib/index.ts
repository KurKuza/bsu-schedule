/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
interface LocalStorages {
  THEME_MODE: 'light' | 'dark' | 'auto';
  COMPACT_MODE: boolean;
}

export const bsuLocalStorage = {
  get(key: keyof LocalStorages) {
    const res = localStorage.getItem(key);

    return res;
  },
  set<T>(key: keyof LocalStorages, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
