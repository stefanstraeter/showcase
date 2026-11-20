import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MobileMenu } from '@layout/mobile-menu/mobile-menu';
import { IconButton } from '@shared/components/icon-button/icon-button';
import { MENU_LINKS } from '@layout/model/constants/menu-links';
import { MenuLink } from '@layout/model/interfaces/menu-link';
import { Button } from '@shared/components/button/button';

@Component({
  imports: [RouterLink, IconButton, MobileMenu, Button],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
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
