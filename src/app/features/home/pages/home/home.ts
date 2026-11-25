import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { ActiveSection } from '@core/services/active-section';
import { About } from '@features/home/components/about/about';
import { Contact } from '@features/home/components/contact/contact';
import { Hero } from '@features/home/components/hero/hero';
import { Tools } from '@features/home/components/tools/tools';
import { Work } from '@features/home/components/work/work';

/**
 * Home page that puts the sections together and tracks which one is on screen.
 */
@Component({
  imports: [About, Hero, Tools, Contact, Work],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly activeSection = inject(ActiveSection);

  /**
   * Starts observing the sections once they are rendered and can be found in the DOM.
   */
  ngAfterViewInit(): void {
    this.activeSection.observeSections();
  }

  /**
   * Stops observing the sections when the home page is left.
   */
  ngOnDestroy(): void {
    this.activeSection.stopObserving();
  }
}
