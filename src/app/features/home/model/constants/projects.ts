import { Project } from '@features/home/model/interfaces/project';

export const PROJECTS: Project[] = [
  {
    slug: 'opina',
    title: 'Opina',
    subtitle: 'Create surveys in minutes, let people vote and watch the results move live.',
    tech: ['Angular', 'TypeScript', 'SCSS', 'Supabase'],
    liveUrl: 'https://stefanstraeter.github.io/opina/',
    githubUrl: 'https://github.com/stefanstraeter/opina',
    screenshot: 'img/screenshot-opina.webp',
  },
  {
    slug: 'kanvera',
    title: 'Kanvera',
    subtitle: 'Plan, organize and execute work in one place: Board, Inbox, Team and Pulse.',
    tech: ['JavaScript (ES6+)', 'CSS', 'Firebase'],
    liveUrl: 'https://stefanstraeter.github.io/kanvera/',
    githubUrl: 'https://github.com/stefanstraeter/kanvera',
    screenshot: 'img/screenshot-kanvera.webp',
  },
  {
    slug: 'chunky-pairs',
    title: 'Chunky Pairs',
    subtitle: 'Flip cards, find matching pairs and race the clock in a head-to-head memory game.',
    tech: ['JavaScript (ES6+)', 'TypeScript', 'SCSS', 'Vite'],
    liveUrl: 'https://stefanstraeter.github.io/chunky-pairs/',
    githubUrl: 'https://github.com/stefanstraeter/chunky-pairs',
    screenshot: 'img/screenshot-chunky-pairs.webp',
  },
  {
    slug: 'neon-city-2065',
    title: 'Neon City 2065',
    subtitle: 'Run, jump and fight through a side-scrolling action game in the browser.',
    tech: ['JavaScript (ES6+)', 'CSS', 'HTML5'],
    liveUrl: 'https://stefanstraeter.github.io/neon-city-2065/',
    githubUrl: 'https://github.com/stefanstraeter/neon-city-2065',
    screenshot: 'img/screenshot-neon-city-2065.webp',
  },
];
