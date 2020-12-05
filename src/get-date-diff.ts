export interface DateDiff {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliSeconds: number;
}

export default function getDateDiff(start: Date, end: Date): DateDiff {
  let remainingMilliseconds = end.getTime() - start.getTime();

  // extract days
  const millisecondsToDays = 1000 * 60 * 60 * 24;
  const days = Math.floor(remainingMilliseconds / millisecondsToDays);
  remainingMilliseconds -= days * millisecondsToDays;

  // extract hours
  const millisecondsToHours = 1000 * 60 * 60;
  const hours = Math.floor(remainingMilliseconds / millisecondsToHours);
  remainingMilliseconds -= hours * millisecondsToHours;

  // extract minutes
  const millisecondsToMinutes = 1000 * 60;
  const minutes = Math.floor(remainingMilliseconds / millisecondsToMinutes);
  remainingMilliseconds -= minutes * millisecondsToMinutes;

  // extract seconds
  const seconds = Math.floor(remainingMilliseconds / 1000);
  remainingMilliseconds -= seconds * 1000;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliSeconds: remainingMilliseconds,
  };
}
