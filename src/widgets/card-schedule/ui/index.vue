<script setup lang="ts">
import { Schedule, useSearchStore } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { ref, watch } from 'vue';
import { addDaysToSchedule } from '../modals';
import { useUISettings } from '@/entities/ui-settings';
import { storeToRefs } from 'pinia';
import { bsuLocalStorage } from '@/shared/storages/localStorage';

const schedules = ref<Schedule[]>();

const store = useSearchStore();

const uiStore = useUISettings();
const { compactMode } = storeToRefs(uiStore);

async function convertedSchedule() {
  const resDesiredSchedule = await store.getDesiredSchedule();
  const finalSchedule = addDaysToSchedule(resDesiredSchedule.data, !compactMode.value);

  return finalSchedule;
}
schedules.value = await convertedSchedule();

watch((store.getDesiredSchedule, compactMode), async () => {
  schedules.value = await convertedSchedule();
});
</script>

<template>
  <div class="schedule-container">
    <div v-for="(schedule, index) of schedules" :key="index">
      <ScheduleDayTitle v-if="'day' in schedule" :day-title="schedule.day" />
      <ScheduleCard v-if="'pairnumber' in schedule" :schedule="schedule" />
      <v-divider v-if="'divider' in schedule" class="divider" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule-container {
  border-radius: 1rem;
  padding: 0.8rem;
  background-color: rgb(var(--v-theme-surface));
}

.divider {
  margin: 0.4rem 1rem;
}
</style>
