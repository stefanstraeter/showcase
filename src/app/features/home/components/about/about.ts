import { Component } from '@angular/core';

import { SectionHeader } from '@shared/components/section-header/section-header';

@Component({
  imports: [SectionHeader],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {}
