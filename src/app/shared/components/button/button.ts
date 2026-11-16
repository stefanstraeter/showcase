import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  variant = input<'light' | 'dark'>('light');
  link = input<string>('/');
  fragment = input<string | undefined>(undefined);
}
