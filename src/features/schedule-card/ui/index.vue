<script setup lang="ts">
import { ScheduleType } from '@/shared/api';
import { PropType } from 'vue';

import Content from './content.vue';
const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleType>,
    required: true,
  },
});

function convertMsToLocalTime(ms: number) {
  const date = new Date(ms * 1000);
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
</script>

<template>
  <a-layout class="container" direction="horizontal">
    <div class="sidebar" align="center" directions="vertical">
      {{ convertMsToLocalTime(props.schedule.timestart) }}
      <a-typography-title :level="4" class="title">{{
        props.schedule.pairnumber
      }}</a-typography-title>
      {{ convertMsToLocalTime(props.schedule.timeend) }}
    </div>
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
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.divider {
  margin: auto;
  height: 60px;
}
.title {
  margin: 0;
}
</style>
