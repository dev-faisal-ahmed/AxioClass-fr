export const dateToStr = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[date?.getDay()];
  const month = months[date?.getMonth()];
  const monthDate = date?.getDate();
  const year = date?.getFullYear();

  return `${day}, ${month} ${monthDate} ${year}`;
};
