import { Component, inject, OnDestroy } from '@angular/core';
import { LayoutVariant } from '@core/services/layout-variant';
import { Button } from '@shared/components/button/button';

const ERROR_FOOTER_LABEL = '404';

@Component({
  imports: [Button],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound implements OnDestroy {
  private readonly layoutVariant = inject(LayoutVariant);

  /**
   * Switches the layout to the error variant and sets the footer label.
   */
  constructor() {
    this.layoutVariant.current.set('error');
    this.layoutVariant.footerLabel.set(ERROR_FOOTER_LABEL);
  }

  /**
   * Switches the layout back to its full variant when the error page is left.
   */
  ngOnDestroy(): void {
    this.layoutVariant.current.set('default');
    this.layoutVariant.footerLabel.set('');
  }
}
