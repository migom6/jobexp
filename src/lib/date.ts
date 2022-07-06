export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const years = generateYears();

function generateYears() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    years.push(i);
  }
  return years;
}

export const infinteDate = new Date("2100-01-01T00:00:00.000Z");
export const convertToISO = ({
  year,
  month,
}: {
  year: number;
  month: string;
}) => {
  const monthIndex = months.indexOf(month);
  return new Date(year, monthIndex, 1).toISOString();
};
