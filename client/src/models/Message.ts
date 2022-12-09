export interface Message {
  mine: boolean;
  text: string;
  date: Date;
  checked: boolean;
}

export function formattedDate(date: Date): string {
  const currentDate = new Date();
  const day = date.getDate();
  const currentDay = currentDate.getDate();
  const hour = date.toLocaleTimeString("es-MX", { timeStyle: "short", hour12: true });
  const weekdayName = date.toLocaleDateString("es-MX", { weekday: "long" });
  if (date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth()) {
    if (day === currentDay) return hour;
    if (day === currentDay - 1) return "Ayer, " + hour;
    else if (day > currentDay - 7) return weekdayName[0].toUpperCase() + weekdayName.slice(1) + ", " + hour;
  }
  return date.toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short", hour12: true });
}
