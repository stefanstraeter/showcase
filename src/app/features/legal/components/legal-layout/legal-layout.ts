import { Component, effect, inject, input, OnDestroy } from '@angular/core';
import { LayoutVariant } from '@core/services/layout-variant';
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
  pageTitle = input.required<string>();
  rows = input.required<LegalRow[]>();

  protected readonly links: LegalLink[] = LEGAL_LINKS;

  private readonly layoutVariant = inject(LayoutVariant);

  constructor() {
    this.layoutVariant.current.set('legal');

    effect(() => {
      this.layoutVariant.pageLabel.set(this.pageTitle());
    });
  }

  /**
   * @description Switches the layout back to its full variant when the legal page is left.
   * @memberof LegalLayout
   */
  ngOnDestroy(): void {
    this.layoutVariant.current.set('default');
    this.layoutVariant.pageLabel.set('');
  }
}
