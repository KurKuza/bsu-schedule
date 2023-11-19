// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { Pair } from '@/entities/schedule';
import { SearchResponse } from '@/entities/search';
import { apiInstance } from '../lib/axios';
import { PropsGetSchedule } from './types';
import { getWeek } from '@/shared/schedule';

// Группа 12002302
// /schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1
export const scheduleApi = {
  getSchedule: (
    content: Omit<PropsGetSchedule, 'from' | 'to'> = {
      type: 'g',
      name: '12002302',
    },
    date: Pick<PropsGetSchedule, 'from' | 'to'> = {
      from: '2023-10-02',
      to: '2023-10-08',
    },
  ) => {
    console.log('🚀  date:', date);
    console.log('🚀  content:', content);
    const week = date.from ? { currentDay: date.from, dayAfter7days: date.to } : getWeek();
    console.log('🚀  week:', week);

    console.log('🚀date  getSchedule:', date);
    const request = `/schedule/${content.type}/${content.name}?from=${week.currentDay}&to=${week.dayAfter7days}&qdist=1`;

    console.log('🚀  request:', 'https://beluni.ru' + request);
    const res = apiInstance.get<Pair[]>(request);
    console.log('🚀getSchedule  res:', res);

    return res;
  },
};

export const searchApi = {
  search: async (query: string) => {
    const res = apiInstance.get<SearchResponse[]>(`/schedule/search?q=${query}`);
    console.log('🚀  res:', res);

    return res;
  },
};
