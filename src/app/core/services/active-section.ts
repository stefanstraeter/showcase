import { Location } from '@angular/common';
import { inject, Service, Signal, signal } from '@angular/core';

/**
 * Ids of the sections on the home page, from the hero down to the contact section.
 */
export type SectionId = 'hero' | 'tools' | 'work' | 'about' | 'contact';

const SECTION_IDS: SectionId[] = ['hero', 'tools', 'work', 'about', 'contact'];
const OBSERVER_ROOT_MARGIN: string = '-50% 0px -50% 0px';

@Service()
export class ActiveSection {
  private readonly current = signal<SectionId>('hero');
  readonly active: Signal<SectionId> = this.current.asReadonly();

  private readonly location = inject(Location);

  /**
   * Sets the active section to the one that touches the observation line in the middle of the screen.
   * @param entries The observed elements whose visibility has changed.
   */
  private readonly updateActiveSection = (entries: IntersectionObserverEntry[]): void => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.current.set(entry.target.id as SectionId);
        this.updateUrl(this.current());
      }
    }
  };

  /**
   * Shows the active section in the address bar without adding an entry to the browser history.
   * @param id The id of the active section. The hero resets the URL to the plain home page.
   */
  private updateUrl(id: SectionId): void {
    const url: string = id === 'hero' ? '/' : `/#${id}`;
    this.location.replaceState(url);
  }

  /**
   * The IntersectionObserver that watches the sections of the home page and calls updateActiveSection
   * when their visibility changes.
   */
  private readonly observer = new IntersectionObserver(this.updateActiveSection, {
    rootMargin: OBSERVER_ROOT_MARGIN,
  });

  /**
   * Starts watching all sections of the home page.
   */
  observeSections(): void {
    for (const id of SECTION_IDS) {
      const section: HTMLElement | null = document.getElementById(id);
      if (section) {
        this.observer.observe(section);
      }
    }
  }

  /**
   * Stops watching all sections of the home page.
   */
  stopObserving(): void {
    this.observer.disconnect();
  }
}
