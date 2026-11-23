import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-arrow-button',
  styleUrl: './arrow-button.scss',
  templateUrl: './arrow-button.html',
})
export class ArrowButton {
  direction = input<'up' | 'down'>('down');
  size = input<'small' | 'large'>('large');
  link = input<string>();
  label = input.required<string>();
  fragment = input<string>();
  pressed = output<void>();
}
