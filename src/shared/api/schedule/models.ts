// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { apiInstance } from '../lib/axios';
import { ScheduleType } from './types';

export const ScheduleApi = {
  getSchedule: () => {
    return apiInstance.get<ScheduleType[]>(
      '/schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1',
    );
  },
};
// Группа 12002302
// /schedule/g/12002302?from=2023-10-02&to=2023-10-08&qdist=1
