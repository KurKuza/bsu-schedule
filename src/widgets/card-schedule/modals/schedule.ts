import { Pair, Schedule } from '@/entities/schedule';

function addDaysToSchedule(schedules: Pair[], showDivider = true): Schedule[] {
  const schedulesWithDays: Schedule[] = [];
  let lastDay = '';

  for (let i = 0; i < schedules.length; i++) {
    const element = schedules[i];
    const day = getDayOfWeek(new Date(element.timestart * 1000));

    if (day === lastDay) {
      showDivider && schedulesWithDays.push({ divider: true });
      schedulesWithDays.push(element);
    } else {
      schedulesWithDays.push({ day });
      schedulesWithDays.push(element);

      lastDay = day;
    }
  }

  return schedulesWithDays;
}

function getDayOfWeek(date: Date): string {
  return date.toLocaleString('ru-RU', { weekday: 'long' });
}

export { addDaysToSchedule };
