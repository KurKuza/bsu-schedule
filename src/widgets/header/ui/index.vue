<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components';
import { ref } from 'vue';
import Drawer from './drawer.vue';
import { storeToRefs } from 'pinia';
import { VueInputEvent } from '@/shared/types';
import { useSearchStore } from '@/entities/schedule';

const store = useSearchStore();
const { searchSupply } = storeToRefs(store);
console.log('🚀  desired:', searchSupply.value);

const isSearch = ref(false);
const drawer = ref(false);

const handleClickSearch = () => {
  isSearch.value = !isSearch.value;
};

function saveSelected(val: VueInputEvent) {
  const res = val?.target?.value?.trim();
  console.log('🚀  res:', res);
  store.handleSaveInputSearch(res);
}
</script>

<template>
  <v-layout>
    <v-main>
      <div class="header">
        <v-card-title class="pa-0">Расписание</v-card-title>

        <!-- <OnClickOutside v-if="isSearch" @trigger="handleClickSearch"> -->
        <!-- v-model:search-input="store.search" -->
        <v-autocomplete
          hide-details
          :items="searchSupply"
          variant="solo"
          class="search"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          @blur="saveSelected"
          @input="store.handleSearchSupply"
        />
        <!-- </OnClickOutside> -->

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
