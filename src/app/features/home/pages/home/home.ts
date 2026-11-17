import { Component } from '@angular/core';
import { About } from '@features/home/components/about/about';
import { Hero } from '@features/home/components/hero/hero';
import { Tools } from '@features/home/components/tools/tools';

@Component({
  imports: [About, Hero, Tools],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
