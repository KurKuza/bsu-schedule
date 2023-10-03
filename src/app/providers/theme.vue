<script setup lang="ts">
import { useThemeStore } from '@/entities/theme';
import { theme } from 'ant-design-vue';
import { storeToRefs } from 'pinia';
import { get } from 'radash';

const store = useThemeStore();

const { themeStatus } = storeToRefs(store);
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: get(theme, themeStatus === 'dark' ? 'darkAlgorithm' : 'lightAlgorithm'),
    }"
  >
    <div :data-theme="themeStatus">
      <slot />
    </div>
  </a-config-provider>
</template>
