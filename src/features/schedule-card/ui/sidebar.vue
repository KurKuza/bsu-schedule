<script setup lang="ts">
import { ScheduleWithDayType } from '@/entities/schedule';
import { PropType } from 'vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleWithDayType>,
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
  <div class="sidebar" align="center" directions="vertical">
    <a-typography-paragraph class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timestart) }}
    </a-typography-paragraph>
    <a-typography-title :level="4" class="title">{{
      props.schedule.pairnumber
    }}</a-typography-title>
    <a-typography-paragraph class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timeend) }}
    </a-typography-paragraph>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-wrap: nowrap;
}

.pyrography {
  margin: 0;
}

.title {
  margin: 0 !important;
}
</style>
