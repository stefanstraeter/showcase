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
   * Sets the project whose preview is shown.
   * @param project The project to preview.
   */
  showPreview(project: Project): void {
    this.activeProject.set(project);
  }

  /**
   * Clears the active project so the preview disappears.
   */
  hidePreview(): void {
    this.activeProject.set(null);
  }

  /**
   * Stores the current mouse position.
   * @param event The mouse event with the cursor position.
   */
  moveCursor(event: MouseEvent): void {
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }
}
