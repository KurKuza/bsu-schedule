<script setup lang="ts">
import { ref } from 'vue';
import Drawer from './drawer.vue';
import { storeToRefs } from 'pinia';
import { VueInputEvent } from '@/shared/types';
import { useSearchStore } from '@/entities/schedule';
import { onClickOutside } from '@vueuse/core';

const store = useSearchStore();
const { searchSupply } = storeToRefs(store);

const isSearch = ref(false);
const drawer = ref(false);
const searchElem = ref();

const handleClickSearch = () => {
  isSearch.value = !isSearch.value;
};

function saveSelected(val: VueInputEvent) {
  const res = val?.target?.value?.trim();
  store.handleSaveInputSearch(res);
}

onClickOutside(searchElem, () => {
  isSearch.value = false;
});
</script>

<template>
  <v-layout>
    <v-main>
      <div class="header">
        <v-card-title class="pa-0">Расписание</v-card-title>

        <search role="search">
          <v-autocomplete
            v-if="isSearch"
            ref="searchElem"
            hide-details
            :items="searchSupply"
            variant="solo"
            class="search"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            @blur="saveSelected"
            @input="store.handleSearchSupply"
          />
        </search>

        <div class="icons">
          <v-btn v-if="!isSearch" icon size="small" @click="handleClickSearch">
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
  margin-bottom: 1rem;
  position: relative;
}
.search {
  position: absolute;
  top: 0.5rem;
  left: 0;
  z-index: 10;
  width: 100vw;
  max-width: 800px;

  background-color: rgb(var(--v-theme-surface));
  border-radius: 0.5rem;
  overflow: hidden;
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
