import React from 'react';

import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from './routes';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} className="z-40" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.1 }}
            transition={{
              duration: 0.1,
            }}
            className="fixed left-0 shadow-4xl right-0 top-[6rem] p-5 pt-3 bg-dark-blue border-b border-b-yellow z-20"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 20,
                      delay: 0.1 + idx / 15,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-lg bg-gradient-to-tr from-gray-blue via-dark-blue to-gray-blue  hover:text-yellow hover:text-yellow"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950'
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
