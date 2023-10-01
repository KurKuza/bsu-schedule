<script setup lang="ts">
import { ref } from 'vue';
import { ScheduleApi, ScheduleType } from '@/shared/api';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
const schedules = ref<ScheduleType[]>();

async function fetch() {
  const schedulesRes = await ScheduleApi.getSchedule();
  console.log(schedulesRes.data);
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
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
