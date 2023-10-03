<script setup lang="ts">
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { ScheduleApi, ScheduleType } from '@/shared/api';
import { ref } from 'vue';
const schedules = ref<ScheduleType[]>();

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
