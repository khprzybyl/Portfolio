import React from 'react';
import DownloadIcon from '../assets/images/downloadIcon.svg';

import { TITLE, NAME, ROLE, INTRO_TEXT } from './AboutMeData.ts';

const AboutMe: React.FC = () => {
  const cvFileName = 'katarzyna_przybyl_cv.pdf';

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-8xl py-9 text-yellow"> {TITLE}</h1>
      <section className="text-base font-light">{NAME}</section>
      <section className="text-base mt-4 font-light">{ROLE}</section>
      <section className="text-base mt-4 font-light leading-6 mb-14">
        {INTRO_TEXT}
      </section>
      <a
        href={`/${cvFileName}`}
        download
        className="inline-flex hover:text-yellow hover:font-bold text-white text-base font-light rounded relative shadow py-2"
      >
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="h-10 w-auto absolute bottom-0 left-28 lg:-left-16"
        />
        Download CV
      </a>
    </div>
  );
};

export default AboutMe;
