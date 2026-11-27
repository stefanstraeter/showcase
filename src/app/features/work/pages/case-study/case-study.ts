import { Component, computed, effect, inject, input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutVariant } from '@core/services/layout-variant';
import { PageTitle } from '@core/services/page-title';
import { Project } from '@features/work/model/interfaces/project';
import { ProjectCatalog } from '@features/work/services/project-catalog';

const NOT_FOUND_PATH = '/404';

@Component({
  imports: [],
  selector: 'app-case-study',
  styleUrl: './case-study.scss',
  templateUrl: './case-study.html',
})
export class CaseStudy implements OnDestroy {
  private readonly catalog = inject(ProjectCatalog);
  private readonly layoutVariant = inject(LayoutVariant);
  private readonly router = inject(Router);
  private readonly pageTitle = inject(PageTitle);

  readonly slug = input.required<string>();

  readonly currentProject = computed(() =>
    this.findProjectBySlug(this.catalog.projects.value() ?? [], this.slug()),
  );

  /**
   * Switches the layout to the minimal variant, keeps the footer label and the tab title
   * in sync with the project title and shows the 404 page for an unknown slug.
   */
  constructor() {
    this.layoutVariant.current.set('minimal');
    effect(() => this.redirectIfUnknown());
    effect(() => {
      const projectTitle = this.currentProject()?.title;
      const hasProject = projectTitle !== undefined;

      this.layoutVariant.footerLabel.set(projectTitle ?? '');
      if (hasProject) {
        this.pageTitle.setPage(projectTitle);
      }
    });
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

  /**
   * Switches the layout back to its full variant when the case study is left.
   */
  ngOnDestroy(): void {
    this.layoutVariant.current.set('default');
    this.layoutVariant.footerLabel.set('');
  }
}
