export type Schedule = Pair | { day: string } | { divider: boolean };

export type Pair = {
  pairnumber: number;
  timestart: number;
  timeend: number;
  edworkkind: string;
  dis: string;
  online: boolean;
  withdist: boolean;
  subgroup?: string;
  room?: Room;
  teacher?: Teacher;
  dayofweek?: string;
  links?: Link[];
};

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
