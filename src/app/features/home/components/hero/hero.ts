import { Component, inject } from '@angular/core';
import { LocalTime } from '@core/services/local-time';
import { ArrowButton } from '@shared/components/arrow-button/arrow-button';

@Component({
  imports: [ArrowButton],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly localTime = inject(LocalTime);
}
