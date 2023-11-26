<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { bsuLocalStorage } from '@/shared/storages/localStorage';

const themeMode = useTheme();
const selectedTheme = ref<string>(bsuLocalStorage.get('THEME_MODE') || 'auto');

const toggleTheme = (mode: 'light' | 'dark' | 'auto') => {
  selectedTheme.value = mode;
  bsuLocalStorage.set('THEME_MODE', mode);
  applyTheme();
};

const convertSelectToTheme = (selectMode: string) => {
  if (selectMode === 'auto') {
    const isDarkMatch = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkMatch ? 'dark' : 'light';
  }

  return selectMode;
};

function applyTheme() {
  themeMode.global.name.value = convertSelectToTheme(selectedTheme.value);
}

applyTheme();
</script>

<template>
  <div class="theme">
    <h4 class="text-h5">Тема</h4>

    <div class="buttons">
      <v-btn
        variant="text"
        :active="selectedTheme === 'light'"
        size="small"
        icon
        @click="() => toggleTheme('light')"
      >
        <v-icon size="x-large">mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn
        variant="text"
        :active="selectedTheme === 'dark'"
        size="small"
        icon
        @click="() => toggleTheme('dark')"
      >
        <v-icon size="x-large">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn
        variant="text"
        :active="selectedTheme === 'auto'"
        size="small"
        icon
        @click="() => toggleTheme('auto')"
      >
        <v-icon size="x-large">mdi-brightness-auto</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons {
  display: flex;
  gap: 0.1rem;
}
</style>
