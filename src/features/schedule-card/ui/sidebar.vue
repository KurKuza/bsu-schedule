<script setup lang="ts">
import { ScheduleType } from '@/entities/schedule';
import { PropType } from 'vue';

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
  <div class="sidebar" align="center" directions="vertical">
    <v-card-paragraph class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timestart) }}
    </v-card-paragraph>
    <v-card-title class="title">{{ props.schedule.pairnumber }}</v-card-title>
    <v-card-paragraph class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timeend) }}
    </v-card-paragraph>
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
