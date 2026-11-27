import { inject, Service } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

const SITE_NAME = 'Stefan Sträter';
const HOME_TITLE = `${SITE_NAME} · Frontend Developer`;

/**
 * Sets the browser tab title. Routes with a `title` get "Page | Stefan Sträter",
 * the home page (no `title` in its route) gets the full home title.
 */
@Service()
export class PageTitle extends TitleStrategy {
  private readonly title = inject(Title);

  /**
   * Called by the router after every navigation with the title of the new route.
   * @param snapshot The router state of the new page.
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageName = this.buildTitle(snapshot);
    const hasPageName = pageName !== undefined;

    if (hasPageName) {
      this.setPage(pageName);
    } else {
      this.title.setTitle(HOME_TITLE);
    }
  }

  /**
   * Sets the title for a single page, e.g. a case study once its project has loaded.
   * @param pageName The name of the page, e.g. 'Opina'.
   */
  setPage(pageName: string): void {
    this.title.setTitle(`${pageName} · ${SITE_NAME}`);
  }
}
