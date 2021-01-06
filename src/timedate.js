const timeDate = () => {
  const dayName = document.querySelector('.date-dayname');
  const dayDate = document.querySelector('.date-day');
  const todaydate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  dayName.innerHTML = todaydate.toLocaleString('default', { weekday: 'long' });
  dayDate.innerHTML = todaydate.toLocaleDateString(undefined, options);
};

export { timeDate as default };