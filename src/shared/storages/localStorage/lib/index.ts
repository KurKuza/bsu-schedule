/* eslint-disable no-restricted-syntax */
interface LocalStorages {
  THEME_MODE: 'light' | 'dark' | 'auto';
}

export const bsuLocalStorage = {
  get(key: keyof LocalStorages) {
    return localStorage.getItem(key as unknown as string);
  },
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  },
};
