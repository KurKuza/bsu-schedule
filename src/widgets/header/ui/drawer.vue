<script setup lang="ts">
import Theme from './theme.vue';
import CompactMode from './compact-mode.vue';
</script>

<template>
  <v-navigation-drawer location="right">
    <div class="drawer">
      <Theme />
      <CompactMode />
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem;
}
</style>
