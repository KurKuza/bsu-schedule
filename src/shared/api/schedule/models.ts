// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { Pair } from '@/entities/schedule';
import { SearchResponse } from '@/entities/search';
import { apiInstance } from '../lib/axios';
import { PropsGetSchedule } from './types';

// Группа 12002302
// /schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1
export const scheduleApi = {
  getSchedule: (val: PropsGetSchedule) => {
    // const res = apiInstance.get<Pair[]>(
    //   `/schedule/${val.type}/${val.name}?from=${val.from}&to=${val.to}&qdist=1`,
    // );
    console.log('🚀Val  getSchedule:', val);
    const res = apiInstance.get<Pair[]>(
      `/schedule/${val.type}/${val.name}?from=2023-10-02&to=2023-10-08&qdist=1`,
    );
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
