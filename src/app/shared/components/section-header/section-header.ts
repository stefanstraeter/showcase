import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-header',
  styleUrl: './section-header.scss',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  number = input.required<string>();
  titleId = input.required<string>();
}
