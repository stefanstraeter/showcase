import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocalTime } from '@core/services/local-time';
import { MobileMenu } from '@layout/mobile-menu/mobile-menu';
import { IconButton } from '@shared/components/icon-button/icon-button';

@Component({
  imports: [RouterLink, IconButton, MobileMenu],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly localTime = inject(LocalTime);

  isMenuOpen = signal<boolean>(false);
  menuIcon = computed<'menu' | 'close'>((): 'menu' | 'close' =>
    this.isMenuOpen() ? 'close' : 'menu',
  );
  menuLabel = computed<string>((): string => (this.isMenuOpen() ? 'Close menu' : 'Open menu'));

  /**
   * @description Opens the mobile menu if it is closed and closes it if it is open.
   * @memberof Header
   */
  toggleMenu(): void {
    this.isMenuOpen.update((isOpen: boolean): boolean => !isOpen);
  }

  /**
   * @description Closes the mobile menu, regardless of its current state.
   * @memberof Header
   */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
