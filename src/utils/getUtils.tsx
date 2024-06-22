export function capitalizeFirstLetter(input: string): string {
  if (input.length === 0) {
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function capitalizeFirstThreeChars(input: string): string {
  if (input.length < 3) {
    return input.toUpperCase();
  }

  return input.slice(0, 3).toUpperCase();
}

export function getCurrentDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay();
  return daysOfWeek[currentDayIndex];
}
