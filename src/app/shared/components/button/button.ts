import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  variant = input<'light' | 'dark'>('light');
  link = input<string>('/');
  fragment = input<string | undefined>(undefined);
  href = input<string | undefined>(undefined);
  download = input<boolean>(false);
}
