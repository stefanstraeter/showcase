import { Routes } from '@angular/router';
import { Home } from '@features/home/pages/home/home';
import { Imprint } from '@features/legal/pages/imprint/imprint';
import { Privacy } from '@features/legal/pages/privacy/privacy';
import { NotFound } from '@features/not-found/pages/not-found/not-found';
import { CaseStudy } from '@features/work/pages/case-study/case-study';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'work/:slug', component: CaseStudy },
  { path: 'imprint', component: Imprint },
  { path: 'privacy', component: Privacy },
  { path: '**', component: NotFound },
];
