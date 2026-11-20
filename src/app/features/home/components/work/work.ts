import { Component, signal } from '@angular/core';

import { Project } from '@features/home/model/interfaces/project';
import { PROJECTS } from '@features/home/model/constants/projects';
import { SectionHeader } from '@shared/components/section-header/section-header';
import { TextLink } from '@shared/components/text-link/text-link';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [SectionHeader, TextLink, RouterLink, DecimalPipe],
  selector: 'app-work',
  styleUrl: './work.scss',
  templateUrl: './work.html',
})
export class Work {
  readonly projects: Project[] = PROJECTS;
  readonly activeProject = signal<Project | null>(null);
  readonly cursorX = signal<number>(0);
  readonly cursorY = signal<number>(0);

  /**
   * @description Sets the project whose preview is shown.
   * @param {Project} project
   * @memberof Work
   */
  showPreview(project: Project): void {
    this.activeProject.set(project);
  }

  /**
   * @description Clears the active project so the preview disappears.
   * @memberof Work
   */
  hidePreview(): void {
    this.activeProject.set(null);
  }

  /**
   * @description Stores the current mouse position.
   * @param {MouseEvent} event
   * @memberof Work
   */
  moveCursor(event: MouseEvent): void {
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }
}
