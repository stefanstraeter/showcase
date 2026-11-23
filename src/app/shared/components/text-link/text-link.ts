import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-text-link',
  styleUrl: './text-link.scss',
  templateUrl: './text-link.html',
})
export class TextLink {
  url = input<string>();
  link = input<string>();
}
