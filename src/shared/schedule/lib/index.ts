export const getWeek = () => {
  const currentDay = new Date().toLocaleDateString('sv');

  const originalDate = new Date(currentDay);

  const newWeek = new Date(originalDate.getTime() + oneWeek);

  const newWeekString =
    newWeek.getFullYear() + '-' + (newWeek.getMonth() + 1) + '-' + newWeek.getDate();

  return { currentDay, dayAfter7days: newWeekString };
};

export const oneWeek = 7 * 24 * 60 * 60 * 1000;
