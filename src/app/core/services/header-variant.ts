import { Service, signal } from '@angular/core';

@Service()
export class HeaderVariant {
  isMinimal = signal<boolean>(false);
}
