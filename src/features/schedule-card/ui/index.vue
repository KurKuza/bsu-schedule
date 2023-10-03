<script setup lang="ts">
import { ScheduleType } from '@/shared/api';
import { PropType } from 'vue';
import Sidebar from './sidebar.vue';

import Content from './content.vue';
const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleType>,
    required: true,
  },
});
</script>

<template>
  <a-layout class="container" direction="horizontal">
    <Sidebar :schedule="props.schedule" />
    <a-divider class="divider" orientation="center" type="vertical" />
    <a-layout-content direction="vertical">
      <Content :schedule="props.schedule" />
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.5rem 0;
  background-color: inherit;
}
.divider {
  margin: auto;
  height: 60px;
}
.title {
  margin: 0;
}
</style>
