<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-navigation-drawer location="right">
    <div class="drawer">
      <v-btn @click="toggleTheme">Toggle Theme</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.drawer {
  padding: 1rem;
}
</style>
