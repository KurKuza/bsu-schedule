<script setup lang="ts">
import { useThemeStore } from '@/entities/theme';
import { storeToRefs } from 'pinia';
import { get } from 'radash';
import { theme } from 'ant-design-vue';

const store = useThemeStore();

const { themeStatus } = storeToRefs(store);
console.log('🚀  themeStatus:', themeStatus.value);

const algorithmTheme = themeStatus.value === 'dark' ? 'darkAlgorithm' : 'lightAlgorithm';

console.log('get Theme', get(theme, algorithmTheme));
</script>

<template>
  <a-config-provider :theme="{ algorithm: get(theme, algorithmTheme) }">
    <slot />
  </a-config-provider>
</template>
