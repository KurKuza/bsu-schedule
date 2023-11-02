<script setup lang="ts">
import { Schedule, useSearchStore } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { ref, watch } from 'vue';
import { addDaysToSchedule } from '../modals';

const schedules = ref<Schedule[]>();

const store = useSearchStore();

async function convertedSchedule() {
  const finalSchedule = addDaysToSchedule((await store.getDesiredSchedule()).data);
  console.log('🚀  finalSchedule:', finalSchedule);
  return finalSchedule;
}

watch(store.getDesiredSchedule, async () => {
  schedules.value = await convertedSchedule();
});
</script>

<template>
  <div class="schedule-container">
    <template v-for="(schedule, index) of schedules">
      <ScheduleDayTitle v-if="'day' in schedule" :key="index" :day-title="schedule.day" />
      <ScheduleCard v-if="'pairnumber' in schedule" :key="index" :schedule="schedule" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.schedule-container {
  border-radius: 1rem;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background-color: rgb(var(--v-theme-surface));
}
</style>
