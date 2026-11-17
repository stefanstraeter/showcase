import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-text-link',
  styleUrl: './text-link.scss',
  templateUrl: './text-link.html',
})
export class TextLink {
  url = input.required<string>();
}
