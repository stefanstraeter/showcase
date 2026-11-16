import { Service, signal } from '@angular/core';

import { formatTime } from '@shared/utils/format-time';

const TIME_ZONE = 'Europe/Vienna';
const UPDATE_INTERVAL_MS = 1000;

@Service()
export class LocalTime {
  time = signal<string>(this.readNow());

  constructor() {
    setInterval((): void => {
      this.time.set(this.readNow());
    }, UPDATE_INTERVAL_MS);
  }

  /**
   * Reads the current time in the configured time zone.
   * @returns The formatted time, e.g. '09:05'.
   */
  private readNow(): string {
    return formatTime(new Date(), TIME_ZONE);
  }
}
