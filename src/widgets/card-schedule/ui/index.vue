<script setup lang="ts">
import { ref } from 'vue';
import { ScheduleApi, ScheduleType } from '@/shared/api';

const schedules = ref<ScheduleType[]>();

async function fetch() {
  const schedulesRes = await ScheduleApi.getSchedule();
  console.log(schedulesRes.data);
  schedules.value = schedulesRes.data;
}

fetch();
</script>

<template>
  <div v-for="schedule in schedules">
    <h1>{{ schedule.subgroup }}</h1>
  </div>
</template>
