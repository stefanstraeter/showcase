import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { Project } from '@features/work/model/interfaces/project';

const PROJECT_URL = 'data/projects.json';

@Service()
export class ProjectCatalog {
  readonly projects = httpResource<Project[]>(() => PROJECT_URL);
}
