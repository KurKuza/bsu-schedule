<script setup lang="ts">
import { Schedule } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { onMounted, ref } from 'vue';
import { addDaysToSchedule } from '../modals';
import { fetchSchedules } from '../api';

const schedules = ref<Schedule[]>([]);

async function convertedSchedule() {
  return addDaysToSchedule(await fetchSchedules());
}

onMounted(async () => {
  schedules.value = await convertedSchedule();
  console.log('🚀  await convertedSchedule():', await convertedSchedule());
});
</script>

<template>
  <div class="schedule-container">
    <template v-for="(schedule, index) in schedules">
      <ScheduleDayTitle v-if="'day' in schedule" :dayTitle="schedule.day" />
      <ScheduleCard v-if="'pairnumber' in schedule" :key="index" :schedule="schedule" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.schedule-container {
  border-radius: 1rem;
  padding: 0.8rem;
  background-color: rgb(var(--v-theme-surface));
}
</style>
