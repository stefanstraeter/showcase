import { Component } from '@angular/core';

import { EXTERNAL_LINKS } from '@layout/model/constants/external-links';
import { LEGAL_LINKS } from '@layout/model/constants/legal-links';
import { ExternalLink } from '@layout/model/interfaces/external-link';
import { LegalLink } from '@layout/model/interfaces/legal-link';
import { ArrowButton } from '@shared/components/arrow-button/arrow-button';
import { TextLink } from '@shared/components/text-link/text-link';

@Component({
  imports: [ArrowButton, TextLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly externalLinks: ExternalLink[] = EXTERNAL_LINKS;
  protected readonly legalLinks: LegalLink[] = LEGAL_LINKS;

  /**
   * @description Scrolls smoothly back to the top of the page.
   * @protected
   * @memberof Footer
   */
  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
