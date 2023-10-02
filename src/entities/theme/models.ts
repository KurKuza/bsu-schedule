import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const themeStatus = ref<'light' | 'dark'>('light');

  function toggleTheme() {
    themeStatus.value = themeStatus.value === 'light' ? 'dark' : 'light';
  }

  return { themeStatus, toggleTheme };
});
