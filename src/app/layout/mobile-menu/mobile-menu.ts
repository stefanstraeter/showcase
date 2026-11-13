import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mobile-menu',
  styleUrl: './mobile-menu.scss',
  templateUrl: './mobile-menu.html',
})
export class MobileMenu {
  label = input.required<string>();
  icon = input<'menu' | 'close'>('menu');
}
