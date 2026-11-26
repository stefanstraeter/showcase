import { Service, signal } from '@angular/core';

/**
 * Layout variants of the app shell: the full layout, the minimal layout of content pages
 * (legal pages and case study) and the minimal layout of the error page.
 */
export type LayoutVariantName = 'default' | 'minimal' | 'error';

@Service()
export class LayoutVariant {
  current = signal<LayoutVariantName>('default');
  pageLabel = signal<string>('');
}
