import { CaseStudyContent } from '@features/work/model/interfaces/case-study-content';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  screenshot: string;
  caseStudy: CaseStudyContent;
}
