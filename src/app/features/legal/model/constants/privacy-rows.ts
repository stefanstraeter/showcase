import { LegalRow } from '@features/legal/model/interfaces/legal-row';

export const PRIVACY_ROWS: LegalRow[] = [
  {
    label: 'In short',
    lines: [
      'No cookies, no tracking, no analytics. Fonts are hosted on this server. The only data collected are anonymised server logs, deleted after eight weeks.',
    ],
  },
  {
    label: 'Controller',
    lines: ['Stefan Sträter', 'Address, as in the imprint'],
  },
  {
    label: 'Hosting',
    lines: [
      'This website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. Hosting is based on my legitimate interest in a secure and reliable presentation of this site (Art. 6 (1) (f) GDPR). I have concluded a data processing agreement with IONOS.',
    ],
  },
  {
    label: 'Server logs',
    lines: [
      'When you visit this site, the server automatically records technical data in log files: the referring website, the requested page or file, browser type and version, operating system, device type and time of access. IP addresses are anonymised. This data cannot be traced back to you. It is used only to keep the site secure and stable (Art. 6 (1) (f) GDPR) and is deleted after eight weeks.',
    ],
  },
  {
    label: 'Contact by email',
    lines: [
      'If you contact me by email, I process your email address and the content of your message only to answer your enquiry (Art. 6 (1) (b) and (f) GDPR). My email is hosted by IONOS. I delete your message once it is no longer needed, unless legal retention periods apply.',
    ],
  },
  {
    label: 'External links',
    lines: [
      'Note on LinkedIn and GitHub: their own privacy policies apply once you leave this site.',
    ],
  },
  {
    label: 'Your rights',
    lines: [
      'You have the right to access the personal data I hold about you (Art. 15 GDPR), and to have it corrected (Art. 16), deleted (Art. 17) or restricted (Art. 18). You may object to processing based on legitimate interest (Art. 21) and request your data in a portable format (Art. 20). To exercise these rights, simply email me. You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).',
    ],
  },
];
