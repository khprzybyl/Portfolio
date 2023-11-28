import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NotificationProps {
  message: string;
  show: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="py-2 px-6 bg-yellow rounded-lg absolute bottom-20"
        >
          <p className="text-dark-blue font-light text-xs">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
