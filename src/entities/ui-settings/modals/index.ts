import { bsuLocalStorage } from '@/shared/storages/localStorage';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUISettings = defineStore('ui-settings', () => {
  const isCompactMode = bsuLocalStorage.get('COMPACT_MODE') === 'true';
  const compactMode = ref<boolean>(isCompactMode || false);

  const switchCompactMode = () => {
    bsuLocalStorage.set('COMPACT_MODE', !compactMode.value);
    compactMode.value = !compactMode.value;
  };

  return {
    compactMode,
    switchCompactMode,
  };
});
