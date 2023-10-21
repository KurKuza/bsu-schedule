<script setup lang="ts">
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';
import { useThemeStore } from '@/entities/theme';
import { useTheme } from 'vuetify';

const isSearch = ref(false);

const handleSearch = () => {
  isSearch.value = !isSearch.value;
};

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <div class="header">
    <v-card-title class="pa-0">Расписание</v-card-title>
    <v-btn @click="toggleTheme">Toggle Theme</v-btn>

    <div class="icons">
      <div class="search-container">
        <v-btn icon size="small" v-if="!isSearch" @click="handleSearch">
          <v-icon icon="mdi-magnify" size="large"
        /></v-btn>

        <OnClickOutside v-else @trigger="handleSearch">
          <v-autocomplete
            solo
            flat
            no-filter
            dense
            hide-details
            variant="outlined"
            ref="isSearch"
            class="search"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            :append-icon="''"
            density="compact"
          />
        </OnClickOutside>
      </div>

      <v-btn icon size="small"><v-icon icon="mdi-star-outline" size="large" /></v-btn>
      <v-btn icon size="small"><v-icon icon="mdi-dots-vertical" size="large" /></v-btn>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.search {
  width: 200px;
  padding: 0 !important;
  height: 40px !important;
}

.icons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
