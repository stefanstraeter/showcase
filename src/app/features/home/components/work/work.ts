import { Component } from '@angular/core';

import { Project } from '@features/home/model/interfaces/project';
import { PROJECTS } from '@features/home/model/constants/projects';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { TextLink } from '@shared/components/text-link/text-link';
import { RouterLink } from '@angular/router';

@Component({
  imports: [SectionHeader, TextLink, RouterLink],
  selector: 'app-work',
  styleUrl: './work.scss',
  templateUrl: './work.html',
})
export class Work {
  readonly projects: Project[] = PROJECTS;
}
