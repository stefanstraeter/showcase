import { Component } from '@angular/core';
import { Button } from '@shared/components/button/button';

@Component({
  imports: [Button],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
