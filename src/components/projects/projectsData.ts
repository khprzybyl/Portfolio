import articleImage from 'assets/images/articleImage.jpg';
import articleImage2 from 'assets/images/articleImage2.jpg';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onClickMore?: string;
  overview?: string;
  studyCase?: string;
  onClickGithub?: string;
  onClickLive?: string;
}

export const ProjectsPack = [
  {
    id: 1,
    title: 'SugarAssist UI/UX',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage,
    onClickMore: 'SugarAssist',
    overview: 'blabla',
    studyCase: 'blabla',
    onClickGithub: 'https://github.com/khprzybyl',
    onClickLive: 'https://sugarassist.io',
  },
  {
    id: 2,
    title: 'Responisive menu',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage2,
    onClickMore: 'responsive-menu',
  },
  {
    id: 3,
    title: 'Landing Page',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage,
    onClickMore: 'landing-page',
  },
  {
    id: 4,
    title: 'Details',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage2,
    onClickMore: 'details-example',
  },
  {
    id: 5,
    title: 'DetailsTwo',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage,
    onClickMore: 'details-example-two',
  },
  {
    id: 6,
    title: 'DetailsThree',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    image: articleImage2,
    onClickMore: 'details-example-three',
  },
];
