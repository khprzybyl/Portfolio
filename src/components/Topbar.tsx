import React from 'react';
import NavMobile from './NavMobile.tsx';
import NavDesktop from './NavDesktop.tsx';

const Topbar = () => {
  return (
    <div>
      <nav className="text-white text-xs flex justify-between pb-5 border-b border-yellow lg:py-5 mb-6">
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Topbar;
