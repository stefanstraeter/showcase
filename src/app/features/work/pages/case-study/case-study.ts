import { Component, computed, effect, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '@features/work/model/interfaces/project';
import { ProjectCatalog } from '@features/work/services/project-catalog';

const NOT_FOUND_PATH = '/404';

@Component({
  imports: [],
  selector: 'app-case-study',
  styleUrl: './case-study.scss',
  templateUrl: './case-study.html',
})
export class CaseStudy {
  private readonly catalog = inject(ProjectCatalog);
  private readonly router = inject(Router);
  readonly slug = input.required<string>();

  readonly currentProject = computed(() =>
    this.findProjectBySlug(this.catalog.projects.value() ?? [], this.slug()),
  );

  constructor() {
    effect(() => this.redirectIfUnknown());
  }

  /**
   * Finds the project whose slug matches the slug from the URL.
   * @param allProjects All projects from the catalog (empty while loading).
   * @param slug The slug to look for, e.g. 'opina'.
   * @returns The matching project, or undefined if none matches.
   */
  private findProjectBySlug(allProjects: Project[], slug: string): Project | undefined {
    return allProjects.find((candidate) => candidate.slug === slug);
  }

  /**
   * Shows the 404 page when the catalog has loaded but no project matches the slug.
   * The address bar keeps the requested URL.
   */
  private redirectIfUnknown(): void {
    const isLoaded = this.catalog.projects.hasValue();
    const isUnknown = this.currentProject() === undefined;

    if (isLoaded && isUnknown) {
      this.router.navigate([NOT_FOUND_PATH], { skipLocationChange: true });
    }
  }
}
