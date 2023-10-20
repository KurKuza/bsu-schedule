import { ScheduleType, ScheduleWithDayType } from '@/entities/schedule';
import { ScheduleApi } from '@/shared/api';

async function fetchSchedules() {
  const res = await ScheduleApi.getSchedule();

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

export { fetchSchedules, addDaysToSchedule };
