import { Service, signal } from '@angular/core';

/**
 * Layout variants of the app shell: the full layout, the minimal layout of the legal pages
 * and the minimal layout of the error page.
 */
export type LayoutVariantName = 'default' | 'legal' | 'error';

@Service()
export class LayoutVariant {
  current = signal<LayoutVariantName>('default');
  pageLabel = signal<string>('');
}
