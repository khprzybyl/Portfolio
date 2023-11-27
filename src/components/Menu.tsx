import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logoUrl from '../assets/images/logo_28.jpg';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import DownloadIcon from '../assets/images/downloadIcon.svg';

const Menu = () => {
  const cvFileName = 'katarzyna_przybyl_cv.pdf';

  return (
    // <div>Menu</div>
    <div className="text-white text-xs flex justify-between tracking-wider items-end pt-5">
      <Link to="/" className="text-xl font-light pr-48">
        <img
          src={logoUrl}
          alt="Company Logo"
          className="h-16 w-auto rounded-full "
        />
      </Link>

      <div className="text-white text-xs flex flex-grow justify-between items-center tracking-wider pb-5 border-b border-yellow">
        <nav className="flex gap-10">
          <Link
            to="/projects"
            className="text-xl font-light hover:text-yellow active:text-yellow active:font-bold focus:text-yellow focus:font-bold"
          >
            Projects
          </Link>
          <Link
            to="/articles"
            className="text-xl font-light hover:text-yellow active:text-yellow active:font-bold focus:text-yellow focus:font-bold"
          >
            Articles
          </Link>
          <Link
            to="/contact"
            className="text-xl font-light hover:text-yellow active:text-yellow active:font-bold focus:text-yellow focus:font-bold"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
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
    </div>
  );
};

export default Menu;
