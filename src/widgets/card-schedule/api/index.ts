import { scheduleApi } from '@/shared/api';

async function fetchSchedules() {
  const res = await scheduleApi.getSchedule();

  return res.data;
}

export { fetchSchedules };
