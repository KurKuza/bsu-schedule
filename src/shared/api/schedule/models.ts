export type ScheduleType = {
  pairnumber: number;
  timestart: number;
  timeend: number;
  edworkkind: string;
  subgroup: string;
  dis: string;
  room: string;
  online: boolean;
  withdist: boolean;
  teacher: { id: number; name: string; dep: string; subdep: string; pos: string };
  links: Array<{ href: string; name: string }>;
};

// <!--
// [
//     {
//         "pairnumber": 4,
//         "timestart": 1695726000,
//         "timeend": 1695731700,
//         "edworkkind": "лаб.",
//         "subgroup": "1 подгруппа",
//         "dis": "Параллельные и распределенные вычисления для многопроцессорных вычислительных систем",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 6271,
//             "name": "Михелев Владимир Михайлович",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=16558",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 4,
//         "timestart": 1695726000,
//         "timeend": 1695731700,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Параллельные и распределенные вычисления для многопроцессорных вычислительных систем",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 107055,
//             "name": "Петров Денис Васильевич",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=16558",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 5,
//         "timestart": 1695732300,
//         "timeend": 1695738000,
//         "edworkkind": "лаб.",
//         "subgroup": "1 подгруппа",
//         "dis": "Методы и средства программирования для Интернет",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 6271,
//             "name": "Михелев Владимир Михайлович",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1319",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 5,
//         "timestart": 1695732300,
//         "timeend": 1695738000,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Методы и средства программирования для Интернет",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 107055,
//             "name": "Петров Денис Васильевич",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1319",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 6,
//         "timestart": 1695738600,
//         "timeend": 1695744300,
//         "edworkkind": "лаб.",
//         "subgroup": "1 подгруппа",
//         "dis": "Методы и средства программирования для Интернет",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 6271,
//             "name": "Михелев Владимир Михайлович",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1319",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 6,
//         "timestart": 1695738600,
//         "timeend": 1695744300,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Методы и средства программирования для Интернет",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 107055,
//             "name": "Петров Денис Васильевич",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1319",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 4,
//         "timestart": 1695812400,
//         "timeend": 1695818100,
//         "edworkkind": "лек.",
//         "subgroup": null,
//         "dis": "Избранные вопросы математической логики",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 52079,
//             "name": "Великая Яна Геннадьевна",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1342",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 5,
//         "timestart": 1695818700,
//         "timeend": 1695824400,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Теоретическая информатика",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 52079,
//             "name": "Великая Яна Геннадьевна",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=16671",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 4,
//         "timestart": 1695898800,
//         "timeend": 1695904500,
//         "edworkkind": "пр.з.",
//         "subgroup": null,
//         "dis": "Избранные вопросы математической логики",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 52079,
//             "name": "Великая Яна Геннадьевна",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=1342",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 5,
//         "timestart": 1695905100,
//         "timeend": 1695910800,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Теоретическая информатика",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 52079,
//             "name": "Великая Яна Геннадьевна",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=16671",
//                 "name": "В курс"
//             }
//         ]
//     },
//     {
//         "pairnumber": 6,
//         "timestart": 1695911400,
//         "timeend": 1695917100,
//         "edworkkind": "лаб.",
//         "subgroup": "2 подгруппа",
//         "dis": "Теоретическая информатика",
//         "room": null,
//         "online": true,
//         "withdist": false,
//         "teacher": {
//             "id": 52079,
//             "name": "Великая Яна Геннадьевна",
//             "dep": "1112. Институт инженерных и цифровых технологий",
//             "subdep": "11120004. Кафедра математического и программного обеспечения информационных систем",
//             "pos": "доц."
//         },
//         "links": [
//             {
//                 "href": "https://pegas.bsu.edu.ru/course/view.php?id=16671",
//                 "name": "В курс"
//             }
//         ]
//     }
// ] -->
