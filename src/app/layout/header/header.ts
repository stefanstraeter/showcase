import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocalTime } from '@core/services/local-time';
import { MobileMenu } from '@layout/mobile-menu/mobile-menu';
import { IconButton } from '@shared/components/icon-button/icon-button';
import { MENU_LINKS } from '@layout/model/constants/menu-links';
import { MenuLink } from '@layout/model/interfaces/menu-link';

@Component({
  imports: [RouterLink, IconButton, MobileMenu],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly localTime = inject(LocalTime);
  readonly links: MenuLink[] = MENU_LINKS;

  isMenuOpen = signal<boolean>(false);

  /**
   * @description Opens the mobile menu.
   * @memberof Header
   */
  openMenu(): void {
    this.isMenuOpen.set(true);
  }

  /**
   * @description Closes the mobile menu, regardless of its current state.
   * @memberof Header
   */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
