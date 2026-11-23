import { Component } from '@angular/core';
import { LegalLayout } from '@features/legal/components/legal-layout/legal-layout';
import { IMPRINT_ROWS } from '@features/legal/model/constants/imprint-rows';
import { LegalRow } from '@features/legal/model/interfaces/legal-row';

@Component({
  imports: [LegalLayout],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  protected readonly rows: LegalRow[] = IMPRINT_ROWS;
}
