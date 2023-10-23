<script setup lang="ts">
import { Pair } from '@/entities/schedule';
import { PropType } from 'vue';

const props = defineProps({
  schedule: {
    type: Object as PropType<Pair>,
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
    <p class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timestart) }}
    </p>
    <v-card-title class="text-h6 title">{{ props.schedule.pairnumber }}</v-card-title>
    <p class="pyrography">
      {{ convertMsToLocalTime(props.schedule.timeend) }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-wrap: nowrap;
  padding: 0.2rem 0;
}

.pyrography {
  margin: 0;
}

.title {
  margin: 0 !important;
  font-weight: 600;
}
</style>
