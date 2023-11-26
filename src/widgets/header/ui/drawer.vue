<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { bsuLocalStorage } from '@/shared/storages/localStorage';

const theme = useTheme();

const selectTheme = ref<string>(bsuLocalStorage.get('THEME_MODE') || 'auto');

const handleToggleTheme = (mode: 'light' | 'dark' | 'auto') => {
  selectTheme.value = mode;
  bsuLocalStorage.set('THEME_MODE', mode);

  setTheme();
};

const convertSelectToTheme = (selectMode: string) => {
  if (selectMode === 'auto') {
    const isDarkMatch = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDarkMatch ? 'dark' : 'light';
  }

  return selectMode;
};

function setTheme() {
  theme.global.name.value = convertSelectToTheme(selectTheme.value);
}

setTheme();
</script>

<template>
  <v-navigation-drawer location="right">
    <div class="drawer">
      <div class="theme">
        <h4 class="text-h5">Тема</h4>

        <div class="buttons">
          <v-btn
            variant="text"
            :active="selectTheme === 'light'"
            size="small"
            icon
            @click="() => handleToggleTheme('light')"
          >
            <v-icon size="x-large">mdi-weather-sunny</v-icon>
          </v-btn>
          <v-btn
            variant="text"
            :active="selectTheme === 'dark'"
            size="small"
            icon
            @click="() => handleToggleTheme('dark')"
          >
            <v-icon size="x-large">mdi-weather-night</v-icon>
          </v-btn>
          <v-btn
            variant="text"
            :active="selectTheme === 'auto'"
            size="small"
            icon
            @click="() => handleToggleTheme('auto')"
          >
            <v-icon size="x-large">mdi-brightness-auto</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  padding: 0.5rem;
}

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
