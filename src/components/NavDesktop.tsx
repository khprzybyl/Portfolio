/* eslint-disable react/jsx-key */
import React from 'react';
import { routes } from './routes.ts';
import { Link } from 'react-router-dom';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import DownloadIcon from '../assets/images/downloadIcon.svg';

const NavDesktop = () => {
  const cvFileName = 'katarzyna_przybyl_cv.pdf';
  return (
    <div className="flex gap-8 justify-between lg:flex-grow">
      <ul className="hidden lg:flex lg:items-center gap-5">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li key={title}>
              <Link
                to={href}
                className="text-sm active:text-yellow font-light active:font-bold focus:text-yellow focus:font-bold flex items-center gap-1 hover:text-yellow hover:text-yellow"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-white text-xs flex gap-3 items-center tracking-wider py-5">
        <a
          href={`/${cvFileName}`}
          download
          className="items-start flex relative"
        >
          <p className="text-yellow font-bold text-lg absolute -top-3 -left-5">
            CV
          </p>
          <img src={DownloadIcon} alt="Company Logo" className="h-8 mr-6" />
        </a>
        <a
          href={'https://www.linkedin.com/in/katarzyna-przybyl/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin logo" className="h-8 w-auto" />
        </a>
        <a
          href={'https://github.com/khprzybyl'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github logo" className="h-8 w-auto " />
        </a>
      </div>
    </div>
  );
};

export default NavDesktop;
