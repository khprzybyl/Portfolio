import AboutMe from 'components/about-me/AboutMe.tsx';
import Projects from 'components/projects/Projects';
import Articles from 'components/articles/Articles';
import Contact from 'components/contact/Contact';

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
