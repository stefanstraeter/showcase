import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocalTime } from '@core/services/local-time';
import { EXTERNAL_LINKS } from '@layout/model/constants/external-links';
import { MENU_LINKS } from '@layout/model/constants/menu-links';
import { ExternalLink } from '@layout/model/interfaces/external-link';
import { MenuLink } from '@layout/model/interfaces/menu-link';
import { IconButton } from '@shared/components/icon-button/icon-button';
import { TextLink } from '@shared/components/text-link/text-link';

@Component({
  imports: [RouterLink, IconButton, TextLink],
  selector: 'app-mobile-menu',
  styleUrl: './mobile-menu.scss',
  templateUrl: './mobile-menu.html',
})
export class MobileMenu {
  protected readonly localTime = inject(LocalTime);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  readonly links: MenuLink[] = MENU_LINKS;
  readonly externalLinks: ExternalLink[] = EXTERNAL_LINKS;

  isOpen = input<boolean>(false);
  closed = output<void>();

  /**
   * Registers an effect that syncs the native dialog with the isOpen input.
   */
  constructor() {
    effect((): void => {
      this.syncDialog(this.isOpen());
    });
  }

  /**
   * Opens or closes the native dialog so that it matches the given state.
   * @param isOpen Whether the menu should be open.
   */
  private syncDialog(isOpen: boolean): void {
    const dialog: HTMLDialogElement | undefined = this.dialog()?.nativeElement;
    if (!dialog) {
      return;
    }
    if (isOpen && !dialog.open) {
      dialog.showModal();
    }
    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }
}
