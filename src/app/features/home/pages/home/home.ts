import { Component } from '@angular/core';
import { About } from '@features/home/components/about/about';
import { Hero } from '@features/home/components/hero/hero';

@Component({
  imports: [About, Hero],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
