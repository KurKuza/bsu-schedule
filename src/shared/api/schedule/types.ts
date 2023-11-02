import { SearchResponseType } from '@/entities/search';

export type PropsGetSchedule = {
  type: SearchResponseType;
  name: string;
  from: string;
  to: string;
};
