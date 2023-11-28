import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './components/routes.ts';
import Topbar from './components/Topbar.tsx';

function App() {
  return (
    <Router>
      <div className="flex justify-between flex-col min-h-screen h-full px-10 pt-5">
        <Topbar />
        <div className="text-white text-xs flex-col justify-between items-center mb-5 tracking-wider ">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.href}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
        <a
          className="text-white-gray text-xs flex justify-center mb-5 tracking-wider"
          href="mailto:khprzybyl@gmail.com "
        >
          © Copyright 2023. Made by Katarzyna Przybył
        </a>
      </div>
    </Router>
  );
}

export default App;
