<script setup lang="ts">
import { useUISettings } from '@/entities/ui-settings';
import { storeToRefs } from 'pinia';

const store = useUISettings();
const { compactMode } = storeToRefs(store);
</script>

<template>
  <div class="compact-mode">
    <h4 class="text-h6">Компактный мод</h4>

    <v-switch
      v-model="compactMode"
      color="info"
      class="switch"
      hide-details
      @click="() => store.switchCompactMode()"
    />
  </div>
</template>

<style scoped>
.compact-mode {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.switch {
  max-width: fit-content;
}
</style>
