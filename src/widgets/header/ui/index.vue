<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components';
import { ref } from 'vue';
import Drawer from './drawer.vue';

const isSearch = ref(false);
const drawer = ref(false);

const handleSearch = () => {
  isSearch.value = !isSearch.value;
};
</script>

<template>
  <v-layout>
    <v-main>
      <div class="header">
        <v-card-title class="pa-0">Расписание</v-card-title>

        <OnClickOutside v-if="isSearch" @trigger="handleSearch">
          <v-autocomplete
            ref="isSearch"
            hide-details
            variant="outlined"
            class="search"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            :append-icon="''"
            density="compact"
          />
        </OnClickOutside>

        <div class="icons">
          <v-btn v-if="!isSearch" icon size="small" @click="handleSearch">
            <v-icon icon="mdi-magnify" size="large"
          /></v-btn>

          <v-btn icon size="small"><v-icon icon="mdi-star-outline" size="large" /></v-btn>
          <v-btn icon size="small" @click.stop="drawer = !drawer"
            ><v-icon icon="mdi-dots-vertical" size="large"
          /></v-btn>
        </div>
      </div>
    </v-main>

    <Drawer v-model="drawer" temporary />
  </v-layout>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.search {
  height: 40px !important;
  width: 300px;
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
