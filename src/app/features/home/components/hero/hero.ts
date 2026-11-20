import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalTime } from '@core/services/local-time';

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly localTime = inject(LocalTime);
}
