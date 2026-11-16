import { Component } from '@angular/core';
import { Hero } from '@features/home/components/hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
