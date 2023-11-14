export const getWeek = () => {
  const currentDayLocale = new Date().toLocaleDateString('sv');

  const originalDate = new Date(currentDayLocale);

  const newWeek = new Date(originalDate.getTime() + oneWeek);

  const newWeekString =
    newWeek.getFullYear() + '-' + (newWeek.getMonth() + 1) + '-' + newWeek.getDate();

  const day = new Date().getDay();

  function getMonday() {
    const d = new Date();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff)).toLocaleDateString('sv');
  }
  function getSunday() {
    const d = new Date();
    const diff = d.getDate() - day + (day === 0 ? 0 : 7);
    return new Date(d.setDate(diff)).toLocaleDateString('sv');
  }

  return {
    monday: getMonday(),
    sunday: getSunday(),
    currentDay: currentDayLocale,
    dayAfter7days: newWeekString,
  };
};

export const oneWeek = 7 * 24 * 60 * 60 * 1000;
