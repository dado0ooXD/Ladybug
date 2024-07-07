// Converting timestamp to date

export function convertTimestamp(date) {
  let properDate = "";
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

  const datum = new Date(date * 1000);
  const day = datum.getDate();
  const month = datum.getMonth();
  const properMonth = months[month];
  const year = datum.getFullYear();

  if (year.toString() === "2024") {
    properDate = `${properMonth} ${day}`;
  }

  if (year.toString() === "2023") {
    properDate = `${properMonth} ${day}, ${year}`;
  }

  return properDate;
}
