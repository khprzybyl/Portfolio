import CvComponent from './CvComponent.tsx';
import Projects from './Projects.tsx';
import Articles from './Articles.tsx';
import Contact from './Contact.tsx';

export const routes = [
  {
    title: 'About me',
    href: '/',
    component: CvComponent,
  },
  {
    title: 'Projects',
    href: '/projects',
    component: Projects,
  },
  {
    title: 'Articles',
    href: '/articles',
    component: Articles,
  },
  {
    title: 'Contact',
    href: '/contact',
    component: Contact,
  },
];
