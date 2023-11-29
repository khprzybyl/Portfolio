import AboutMe from './AboutMe';
import Projects from './Projects';
import Articles from './Articles';
import Contact from './Contact';

interface Route {
  title: string;
  href: string;
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    title: 'About me',
    href: '/',
    component: AboutMe,
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
