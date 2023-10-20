<script setup lang="ts">
import { ScheduleType, ScheduleWithDayType } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { ScheduleApi } from '@/shared/api';
import { onMounted, ref } from 'vue';

const schedules = ref<ScheduleWithDayType[]>([]);

async function fetchSchedules() {
  const res = await ScheduleApi.getSchedule();
  schedules.value = res.data;

  return res.data;
}

function addDaysToSchedule(schedules: ScheduleType[]): ScheduleWithDayType[] {
  let schedulesWithDays: ScheduleWithDayType[] = [];
  let lastDay = '';

  for (let i = 0; i < schedules.length; i++) {
    const element = schedules[i];
    const day = getDayOfWeek(new Date(element.timestart * 1000));

    if (day === lastDay) {
      schedulesWithDays.push(element);
    } else {
      schedulesWithDays.splice(i, 0, { day });
      lastDay = day;
    }
  }

  return schedulesWithDays;
}

function getDayOfWeek(date: Date): string {
  return date.toLocaleString('ru-RU', { weekday: 'long' });
}

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
  background-color: #fff;
}

// [data-theme='dark'] .schedule-container {
//   background-color: #141414;
// }
</style>
