import articleImage from 'assets/images/articleImage.jpg';
import articleImage2 from 'assets/images/articleImage2.jpg';
import mobileBackground from 'assets/images/Group.png';

export interface ProjectsPack {
  id: number;
  title: string;
  subtitle: string;
  purpose?: string;
  description: string;
  challenge?: string;
  image: string;
  imageTwo?: string;
  imageThree?: string;
  overview?: string;
  tools?: string[];
  onClickMore?: string;
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

    subtitle: '[Study Case]',
    description: `One-page application with a list of people and the details about their related home planet. `,
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
    onClickMore: 'StarWars',
    onClickGithub: 'https://github.com/khprzybyl',
    onClickLive: '#',
    overview: 'Overview Starwars',
  },
  {
    id: 3,
    title: 'Wishlist with idea navigator assistant',
    subtitle: 'Proof concept',
    description: `Project created to practice skills. It is simple app to vote for ideas - connected with chatGPT `,
    tools: ['REACT', 'JAVASCRIPT', 'HTML', 'TAILWIND'],
    image: articleImage,
    onClickMore: 'Wishlist',
  },
];
