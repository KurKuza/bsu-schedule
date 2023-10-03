<script setup lang="ts">
import { ref } from 'vue';
import { ScheduleApi, ScheduleType } from '@/shared/api';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { useThemeStore } from '@/entities/theme';
import { storeToRefs } from 'pinia';
const schedules = ref<ScheduleType[]>();

const store = useThemeStore();

const { themeStatus } = storeToRefs(store);

async function fetch() {
  const schedulesRes = await ScheduleApi.getSchedule();
  schedules.value = schedulesRes.data;
}

fetch();
</script>

<template>
  <div class="schedule-container">
    <ScheduleDayTitle />
    <ScheduleCard v-for="(schedule, index) in schedules" :key="index" :schedule="schedule" />
  </div>
</template>

<style scoped lang="scss">
.schedule-container {
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
}

[data-theme='dark'] .schedule-container {
  background-color: #141414;
}
</style>
