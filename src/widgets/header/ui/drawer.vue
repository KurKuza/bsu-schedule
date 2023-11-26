<script setup lang="ts">
import Theme from './theme.vue';
</script>

<template>
  <v-navigation-drawer location="right">
    <div class="drawer">
      <Theme />
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  padding: 0.5rem;
}
</style>
