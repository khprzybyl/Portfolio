import React from 'react';
import Menu from './Menu.tsx';

const Background = () => {
  return (
    <div className="bg-dark-blue flex flex-col justify-between items-center h-screen">
      <Menu />
      <div className="flex-grow flex justify-center items-center">
        <p className="text-yellow text-3xl text-center tracking-widest">
          This page is learning new tricks! Updates are coming soon.
        </p>
      </div>
      <div className="flex justify-center w-full pb-5">
        <a
          className="text-white-gray text-xs flex justify-center mb-5 tracking-wider"
          href="mailto:khprzybyl@gmail.com "
        >
          © 2023 Katarzyna Przybył
        </a>
      </div>
    </div>
  );
};

export default Background;
