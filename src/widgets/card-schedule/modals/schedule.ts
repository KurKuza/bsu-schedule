import { Pair, Schedule } from '@/entities/schedule';

function addDaysToSchedule(schedules: Pair[]): Schedule[] {
  let schedulesWithDays: Schedule[] = [];
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

export { addDaysToSchedule };
