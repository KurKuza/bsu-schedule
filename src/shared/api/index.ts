// https://beluni.ru/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1

import { API_URL } from '../config';

export const ScheduleApi = {
  getSchedule: () => {
    return fetch(`${API_URL}/schedule/g/12002331?from=2023-09-25&to=2023-10-01&qdist=1`);
  },
};
