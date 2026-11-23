import { Component, inject, input, OnDestroy } from '@angular/core';
import { HeaderVariant } from '@core/services/header-variant';
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
export class LegalLayout implements OnDestroy {
  title = input.required<string>();
  rows = input.required<LegalRow[]>();

  protected readonly links: LegalLink[] = LEGAL_LINKS;

  private readonly headerVariant = inject(HeaderVariant);

  constructor() {
    this.headerVariant.isMinimal.set(true);
  }

  /**
   * @description Switches the header back to its full variant when the legal page is left.
   * @memberof LegalLayout
   */
  ngOnDestroy(): void {
    this.headerVariant.isMinimal.set(false);
  }
}
