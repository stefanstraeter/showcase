import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-icon-button',
  styleUrl: './icon-button.scss',
  templateUrl: './icon-button.html',
})
export class IconButton {
  label = input.required<string>();
  icon = input<'menu' | 'close'>('menu');
}
