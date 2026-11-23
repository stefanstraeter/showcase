import { Component } from '@angular/core';
import { LegalLayout } from '@features/legal/components/legal-layout/legal-layout';
import { PRIVACY_ROWS } from '@features/legal/model/constants/privacy-rows';
import { LegalRow } from '@features/legal/model/interfaces/legal-row';

@Component({
  imports: [LegalLayout],
  selector: 'app-privacy',
  styleUrl: './privacy.scss',
  templateUrl: './privacy.html',
})
export class Privacy {
  protected readonly rows: LegalRow[] = PRIVACY_ROWS;
}
