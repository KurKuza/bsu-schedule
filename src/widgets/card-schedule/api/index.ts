import { ScheduleApi } from '@/shared/api';

async function fetchSchedules() {
  const res = await ScheduleApi.getSchedule();

  return res.data;
}

export { fetchSchedules };
