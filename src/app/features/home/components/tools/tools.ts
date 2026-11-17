import { Component } from '@angular/core';

import { TOOL_GROUPS } from '@features/home/model/constants/tool-groups';
import { ToolGroup } from '@features/home/model/interfaces/tool-group';
import { SectionHeader } from '@shared/components/section-header/section-header';

@Component({
  imports: [SectionHeader],
  selector: 'app-tools',
  styleUrl: './tools.scss',
  templateUrl: './tools.html',
})
export class Tools {
  readonly groups: ToolGroup[] = TOOL_GROUPS;
}
