import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LayoutVariant } from '@core/services/layout-variant';
import { MobileMenu } from '@layout/mobile-menu/mobile-menu';
import { IconButton } from '@shared/components/icon-button/icon-button';
import { MENU_LINKS } from '@layout/model/constants/menu-links';
import { MenuLink } from '@layout/model/interfaces/menu-link';
import { Button } from '@shared/components/button/button';
import { TextLink } from '@shared/components/text-link/text-link';
import { ActiveSection } from '@core/services/active-section';

/**
 * Site header with logo, navigation and mobile menu, which marks the section that is currently on screen.
 */
@Component({
  imports: [RouterLink, IconButton, MobileMenu, Button, TextLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly activeSection = inject(ActiveSection);
  protected readonly layoutVariant = inject(LayoutVariant);

  readonly links: MenuLink[] = MENU_LINKS;

  isMenuOpen = signal<boolean>(false);

  /**
   * Opens the mobile menu.
   */
  openMenu(): void {
    this.isMenuOpen.set(true);
  }

  /**
   * Closes the mobile menu, regardless of its current state.
   */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
