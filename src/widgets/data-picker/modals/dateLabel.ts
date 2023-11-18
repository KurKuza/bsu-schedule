export function dateLabel(input: string) {
  if (!input) {
    return '';
  }
  // Разделяем строку на две даты
  const dates = input.split('—');

  // Разбиваем каждую дату на месяц и день
  const startDate = dates[0].split('-');
  const endDate = dates[1].split('-');

  // Получаем числовое значение месяца (от 0 до 11) и дня начальной даты
  const startMonth = parseInt(startDate[1]) - 1;
  const startDay = parseInt(startDate[2]);

  // Получаем числовое значение месяца (от 0 до 11) и дня конечной даты
  const endMonth = parseInt(endDate[1]) - 1;
  const endDay = parseInt(endDate[2]);

  // Массив с названиями месяцев

  // Создаем строку с преобразованным форматом даты
  const output =
    startDay + ' ' + monthNames[startMonth] + ' - ' + endDay + ' ' + monthNames[endMonth];

  return output;
}

export const monthNames = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];
