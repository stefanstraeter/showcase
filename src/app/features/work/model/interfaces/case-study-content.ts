import { CaseStudyImage } from '@features/work/model/interfaces/case-study-image';

export interface CaseStudyContent {
  intro: string;
  role: string;
  timeline: string;
  heroImage: CaseStudyImage;
  detailImages: CaseStudyImage[];
  challenge: string[];
  approach: string[];
  learned: string[];
}
