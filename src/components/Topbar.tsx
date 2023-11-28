import React from 'react';
import NavMobile from './NavMobile.tsx';
import NavDesktop from './NavDesktop.tsx';

const Topbar = () => {
  return (
    <div>
      <nav className="text-white text-xs flex justify-between border-b border-yellow">
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Topbar;
