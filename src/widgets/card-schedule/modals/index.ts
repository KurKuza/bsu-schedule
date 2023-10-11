// import { ScheduleApi, ScheduleType } from '@/shared/api';
// import { ref } from 'vue';

// import { ScheduleType } from '@/shared/api';

// export type ScheduleWithDayType = ScheduleType | { day: string };

// const loading = ref(false);
// const schedules = ref<(ScheduleType | { day: string })[]>();

// async function fetchSchedules() {
//   loading.value = true;
//   const res = await ScheduleApi.getSchedule();
//   return res.data;
// }

// function convertSchedulesWithDays(schedules: ScheduleType[] | undefined) {
//   if (!schedules) return [];

//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const schedulesWithDays: (ScheduleType | { day: string })[] = [];

//   let currentPair = 0;
//   for (let i = 0, len = schedules.length; i < len; i++) {
//     const schedule = schedules[i];

//     if (schedule.pairnumber < currentPair) {
//       schedulesWithDays.splice(i, 0, { day: days[i] });
//     }
//   }

//   return schedulesWithDays;
// }

// const getSchedulesWithDays = async () => {
//   const res = await fetchSchedules();
//   console.log('🚀  res:', res);
//   loading.value = false;

//   console.log('🚀  convertSchedulesWithDays(res):', convertSchedulesWithDays(res));
//   return convertSchedulesWithDays(res);
// };

// console.log('🚀  schedules:', schedules);

// export { getSchedulesWithDays, loading };
