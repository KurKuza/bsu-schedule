export interface ScheduleType {
  pairnumber: number;
  timestart: number;
  timeend: number;
  edworkkind: string;
  subgroup?: string;
  dis: string;
  room?: Room;
  online: boolean;
  withdist: boolean;
  teacher?: Teacher;
  links?: Link[];
}

export interface Room {
  id: number;
  name: string;
  area: string;
  address: string;
}

export interface Teacher {
  id: number;
  name: string;
  dep: string;
  subdep: string;
  pos: string;
}

export interface Link {
  href: string;
  name: string;
}
