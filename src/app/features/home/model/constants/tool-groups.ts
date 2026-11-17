import { ToolGroup } from '@features/home/model/interfaces/tool-group';

export const TOOL_GROUPS: ToolGroup[] = [
  {
    category: 'Frontend',
    tools: [
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'SASS/SCSS',
      'HTML5',
      'REST APIs',
      'Bootstrap',
    ],
  },
  { category: 'Backend', tools: ['Firebase API', 'Supabase', 'Node.js'] },
  { category: 'Design & Marketing', tools: ['Figma', 'Adobe CC', 'UI/UX design'] },
  { category: 'Tools', tools: ['Git', 'GitHub', 'VS Code'] },
];
