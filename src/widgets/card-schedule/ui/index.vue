<script setup lang="ts">
import { ScheduleWithDayType } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { onMounted, ref } from 'vue';
import { addDaysToSchedule, fetchSchedules } from '../modals';

const schedules = ref<ScheduleWithDayType[]>([]);

onMounted(async () => {
  schedules.value = addDaysToSchedule(await fetchSchedules());
});
</script>

<template>
  <div class="schedule-container">
    <template v-for="(schedule, index) in schedules">
      <ScheduleDayTitle v-if="'day' in schedule" :dayTitle="schedule.day" />
      <template v-else>
        <ScheduleCard v-if="'pairnumber' in schedule" :key="index" :schedule="schedule" />
      </template>
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
