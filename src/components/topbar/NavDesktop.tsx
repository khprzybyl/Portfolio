/* eslint-disable react/jsx-key */
import React from 'react';
import { routes } from 'routes/routes.ts';
import { Link } from 'react-router-dom';
import linkedin from 'assets/images/linkedin.png';
import github from 'assets/images/github.png';
import DownloadIcon from 'assets/svg/downloadIcon.svg';
import IconLink from '../shared/IconLink';

const NavDesktop: React.FC = () => {
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
      <div className="text-white text-xs flex gap-6 items-center tracking-wider py-5">
        <IconLink
          href={`/${cvFileName}`}
          imgSrc={DownloadIcon}
          altText="Download CV"
          text="CV"
        />
        <IconLink
          href="https://www.linkedin.com/in/katarzyna-przybyl/"
          imgSrc={linkedin}
          altText="Linkedin link"
        />
        <IconLink
          href="https://github.com/khprzybyl"
          imgSrc={github}
          altText="GitHub link"
        />
      </div>
    </div>
  );
};

export default NavDesktop;
