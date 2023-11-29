import React from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

const Topbar: React.FC = () => {
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
