// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { Pair } from '@/entities/schedule';
import { apiInstance } from '../lib/axios';
import { SearchResponse } from '@/entities/search';

// Группа 12002302
// /schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1
export const scheduleApi = {
  getSchedule: () =>
    apiInstance.get<Pair[]>('/schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1', {
      id: 'schedule',
    }),
};

export const searchApi = {
  search: async (query: string) => {
    console.log(
      '🚀  apiInstance.get(`/schedule/search?q=${query}`):',
      await apiInstance.get<SearchResponse[]>(`/schedule/search?q=${query}`),
    );
    return apiInstance.get<SearchResponse[]>(`/schedule/search?q=${query}`);
  },
};
// v-autocomplete__content
