import { Component, input } from '@angular/core';
import { LegalRow } from '@features/legal/model/interfaces/legal-row';
import { LEGAL_LINKS } from '@layout/model/constants/legal-links';
import { LegalLink } from '@layout/model/interfaces/legal-link';
import { TextLink } from '@shared/components/text-link/text-link';

@Component({
  imports: [TextLink],
  selector: 'app-legal-layout',
  styleUrl: './legal-layout.scss',
  templateUrl: './legal-layout.html',
})
export class LegalLayout {
  title = input.required<string>();
  rows = input.required<LegalRow[]>();

  protected readonly links: LegalLink[] = LEGAL_LINKS;
}
