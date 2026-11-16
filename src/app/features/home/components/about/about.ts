import { Component } from '@angular/core';
import { ABOUT_FACTS } from '@features/home/model/constants/about-facts';
import { AboutFact } from '@features/home/model/interfaces/about-fact';

import { SectionHeader } from '@shared/components/section-header/section-header';
import { Button } from '@shared/components/button/button';
import { PhotoStrip } from '@features/home/components/about/photo-strip/photo-strip';

@Component({
  imports: [SectionHeader, Button, PhotoStrip],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  readonly facts: AboutFact[] = ABOUT_FACTS;
}
