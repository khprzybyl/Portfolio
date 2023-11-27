import DownloadIcon from '../assets/images/downloadIcon.svg';
import React from 'react';

const CvComponent = () => {
  const cvFileName = 'katarzyna_przybyl_cv.pdf';
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-8xl pb-9 text-yellow"> Hello, </h1>
      <p className="text-base font-light">
        My name is <span className="font-bold">Katarzyna Przybył</span>.
      </p>
      <p className="text-base mt-4 font-light">
        I have over one year of experience in programming as Junior JavaScript
        Developer based in Sopot, Poland.
      </p>
      <p className="text-base mt-4 font-light leading-6">
        I’m a person with an artistic approach to web and mobile applications
        development. I am deeply committed to creating interfaces that
        seamlessly blend form and function to provide a superior user
        experience. My action is characterized by independent and critical
        thinking, empathy and reflection. I strive to design a unique solution
        based on real requirements rather than guesses and preconceptions.
      </p>

      <a
        href={`/${cvFileName}`}
        download
        className="flex items-baseline relative"
      >
        <img
          src={DownloadIcon}
          alt="Company Logo"
          className="h-10 w-auto absolute -bottom-2 -left-16"
        />
        <button className="mt-14 bg-yellow-400 text-base font-light rounded shadow">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default CvComponent;
