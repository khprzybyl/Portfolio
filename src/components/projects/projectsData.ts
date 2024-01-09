import articleImage from 'assets/images/articleImage.jpg';
import articleImage2 from 'assets/images/articleImage2.jpg';
import mobileView from 'assets/images/login.png';
import mobileBackground from 'assets/images/Group.png';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  purpose?: string;
  description: string;
  challenge?: string;
  image: string;
  imageTwo?: string;
  imageThree?: string;
  onClickMore?: string;
  overview?: string;
  tools?: string[];
  onClickGithub?: string;
  onClickLive?: string;
  mainAssumptions?: string;
  imageBackground?: string;
}

export const ProjectsPack = [
  {
    id: 1,
    title: 'SugarAssist',
    subtitle: 'User Experience & User Interface',
    description:
      'Creating UI design in one day. It had to cater to its primary users - children and their parents, aligning aesthetically with the Sugarscout e-book. ',
    challenge:
      'Creating UI design in one day. It had to cater to its primary users - children and their parents, aligning aesthetically with the Sugarscout e-book. ',
    image: articleImage,
    imageBackground: mobileBackground,
    imageTwo: articleImage,
    onClickMore: 'SugarAssist',
    purpose: 'DLabs.AI',
    mainAssumptions: 'Simplicity, Fun colors, Positive Vibe',
    overview:
      'Lorem Ipsum  This is the project which was created to practice skills in Flexbox and Grid, and to checkout the posibilities of differents approches  This is the project which was created to practice skills in Flexbox and Grid, and to checkout the posibilities of differents approches',
    tools: ['FIGMA', 'PHOTOSHOP', 'ADOBE ILLUSTRATOR'],
    onClickGithub: 'https://github.com/khprzybyl',
    onClickLive: 'https://sugarassist.io',
  },
  {
    id: 2,
    title: 'Star Wars Characters Explorer',

    subtitle:
      'Study case - One-page application with a list of people and the details about their related home planet.',
    description: `It shows my ability to interact with third-party APIs, shows how I handle dealing with APIs constraints on the frontend, 
shows my ability to present a UI to the user.
`,
    challenge:
      'This app should shows my ability to interact with third-party APIs, shows how I handle dealing with APIs constraints on the frontend, shows my ability to present a UI to the user.',
    tools: [
      'REACT',
      'JAVASCRIPT',
      'CSS',
      'HTML',
      'TANSTACK-QUERY',
      'TAILWIND',
      'WEBPACK',
    ],
    purpose: 'Practice',
    mainAssumptions:
      'Simplicity, Intuitive, Functional, Design Star Wars related',
    image: articleImage2,
    imageBackground: articleImage2,
    imageTwo: articleImage,
    onClickMore: 'responsive-menu',
    onClickGithub: 'https://github.com/khprzybyl',
    onClickLive: '#',
    overview: 'Overview Starwars',
  },
  {
    id: 3,
    title: 'Landing Page',
    subtitle: 'Flexbox vs Grid - CSS skills',
    description: ` This is the project which was created to practice skills in Flexbox
            and Grid, and to checkout the posibilities of differents approches
            to achive one result. `,
    tools: ['REACT', 'JAVASCRIPT', 'TAILWIND', 'FIGMA'],
    image: articleImage,
    onClickMore: 'landing-page',
  },
];
