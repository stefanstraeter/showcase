import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocalTime } from '@core/services/local-time';
import { EXTERNAL_LINKS } from '@layout/model/constants/external-links';
import { MENU_LINKS } from '@layout/model/constants/menu-links';
import { ExternalLink } from '@layout/model/interfaces/external-link';
import { MenuLink } from '@layout/model/interfaces/menu-link';

@Component({
  imports: [RouterLink],
  selector: 'app-mobile-menu',
  styleUrl: './mobile-menu.scss',
  templateUrl: './mobile-menu.html',
})
export class MobileMenu {
  protected readonly localTime = inject(LocalTime);

  readonly links: MenuLink[] = MENU_LINKS;
  readonly externalLinks: ExternalLink[] = EXTERNAL_LINKS;

  isOpen = input<boolean>(false);
  closed = output<void>();
}
