import { LegalRow } from '@features/legal/model/interfaces/legal-row';

export const IMPRINT_ROWS: LegalRow[] = [
  {
    label: 'Responsible',
    lines: ['Stefan Sträter', 'Salszstr. 5', '32609 Hüllhorst', 'Germany'],
  },
  {
    label: 'Contact',
    lines: ['mail@stefanstraeter.dev'],
  },
  {
    label: 'Purpose',
    lines: [
      'This is the personal portfolio of Stefan Sträter. It presents my work as a frontend developer and serves as a point of contact for job opportunities. It does not offer any products or paid services.',
    ],
  },
  {
    label: 'Liability for content',
    lines: [
      'I created the content of this site with care, but I can not guarantee that it is complete, accurate or up to date. As a service provider, I am responsible for my own content on these pages under general law (Section 7 (1) DDG). Under Sections 8 to 10 DDG, I am not obliged to monitor transmitted or stored third-party information. If I become aware of any legal violations, I will remove the content concerned immediately.',
    ],
  },
  {
    label: 'Liability for links',
    lines: [
      'This site contains links to external websites, such as LinkedIn and GitHub. I have no influence on their content and therefore accept no liability for it. The respective provider or operator is always responsible for the content of linked pages. If I become aware of any legal violations, I will remove the link immediately.',
    ],
  },
  {
    label: 'Photography',
    lines: ['All photographs on this site are my own unless stated otherwise.'],
  },
];
