const TIME_LOCALE = 'en-GB';

/**
 * Formats a date as HH:MM:SS (24-hour clock) in the given time zone.
 * @param date The point in time to format.
 * @param timeZone An IANA time zone, e.g. 'Europe/Vienna'.
 * @returns The formatted time, e.g. '09:05:23'.
 */
export function formatTime(date: Date, timeZone: string): string {
  return date.toLocaleTimeString(TIME_LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone,
  });
}
