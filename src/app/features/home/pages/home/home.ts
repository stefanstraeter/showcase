import { Component } from '@angular/core';
import { About } from '@features/home/components/about/about';
import { Contact } from '@features/home/components/contact/contact';
import { Hero } from '@features/home/components/hero/hero';
import { Tools } from '@features/home/components/tools/tools';
import { Work } from '@features/home/components/work/work';

@Component({
  imports: [About, Hero, Tools, Contact, Work],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
