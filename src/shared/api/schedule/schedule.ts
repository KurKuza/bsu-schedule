// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { Schedule } from './models';
import { apiInstance } from '../lib/axios';

export const ScheduleApi = {
  getSchedule: () => {
    return apiInstance.get<Schedule[]>(
      '/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1',
    );
  },
};
