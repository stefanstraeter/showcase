import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ArrowButton } from '@shared/components/arrow-button/arrow-button';
import { LEGAL_LINKS } from '@layout/model/constants/legal-links';
import { LegalLink } from '@layout/model/interfaces/legal-link';

@Component({
  imports: [RouterLink, ArrowButton],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
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
