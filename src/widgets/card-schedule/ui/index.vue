<script setup lang="ts">
import { ScheduleWithDayType } from '@/entities/schedule';
import { ScheduleCard } from '@/features/schedule-card';
import { ScheduleDayTitle } from '@/features/schedule-day-title';
import { ScheduleApi, ScheduleType } from '@/shared/api';
import { onMounted, ref } from 'vue';

const schedules = ref<ScheduleWithDayType[]>([]);

async function fetchSchedules() {
  const res = await ScheduleApi.getSchedule();
  schedules.value = res.data;

  return res.data;
}

function addDaysToSchedules(schedules: ScheduleType[] | undefined) {
  if (!schedules) return [];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const schedulesWithDaysAndDays: ScheduleWithDayType[] = schedules;
  schedulesWithDaysAndDays.unshift({ day: days[0] });

  let lastPair = 1;
  let dayIndex = 0;
  for (let i = 0, len = schedules.length; i < len; i++) {
    const { pairnumber } = schedules[i];

    console.log('🚀  pairnumber < lastPair:', pairnumber, lastPair);
    if (pairnumber > lastPair) {
      lastPair = pairnumber;
    }

    if (pairnumber < lastPair) {
      dayIndex++;
      console.log('🚀  dayIndex:', dayIndex);
      schedulesWithDaysAndDays.splice(i, 0, { day: days[dayIndex] });
      lastPair = 1;
    }
  }

  return schedulesWithDaysAndDays;
}

// const getSchedulesWithDays = async () => {
//   const res = await fetchSchedules();
//   console.log('🚀  res:', res);
//   loading.value = false;
//   schedules.value = res;

//   console.log('🚀  addDaysToSchedules(res):', addDaysToSchedules(res));
// };

// const sheduleFromPromise = ref<any>([]);

onMounted(async () => {
  console.log(
    '🚀  addDaysToSchedules(await fetchSchedules()):',
    addDaysToSchedules(await fetchSchedules()),
  );
  schedules.value = addDaysToSchedules(await fetchSchedules());
});
</script>

<template>
  <div class="schedule-container">
    <ScheduleDayTitle />
    <ScheduleCard v-for="(item, index) in schedules" :key="index" :schedule="item" />
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
