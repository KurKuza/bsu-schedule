<script setup lang="ts">
import { handleToggleTheme } from '@/entities/theme';
import { useTheme } from 'vuetify';

const theme = useTheme();
</script>

<template>
  <v-navigation-drawer location="right">
    <div class="drawer">
      <v-btn @click="() => handleToggleTheme(theme)">Toggle Theme</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  padding: 1rem;
}
</style>
