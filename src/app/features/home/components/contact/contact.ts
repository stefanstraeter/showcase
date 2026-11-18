import { Component, inject } from '@angular/core';
import { LocalTime } from '@core/services/local-time';
import { EXTERNAL_LINKS } from '@layout/model/constants/external-links';
import { ExternalLink } from '@layout/model/interfaces/external-link';
import { Button } from '@shared/components/button/button';
import { CopyEmail } from '@shared/components/copy-email/copy-email';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { TextLink } from '@shared/components/text-link/text-link';

@Component({
  imports: [SectionHeader, Button, TextLink, CopyEmail],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly localTime = inject(LocalTime);
  readonly externalLinks: ExternalLink[] = EXTERNAL_LINKS;
  readonly contactEmail = 'mail@stefanstraeter.dev';
}
