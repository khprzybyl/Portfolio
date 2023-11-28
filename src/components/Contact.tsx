import React, { useState } from 'react';
import Notification from './Notification.tsx';
import CopyIcon from '../assets/images/copyIcon.svg';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 800);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center leading-6 static">
      <p className=" text-xl font-bold pb-6">Katarzyna Przybył</p>
      <div className="flex gap-6 pb-4">
        <p className=" text-lg font-light">+48 605 300 172</p>
        <button
          onClick={() => copyToClipboard('+48 605 300 172')}
          className="flex items-center  gap-2"
        >
          <img src={CopyIcon} alt="Github logo" className="h-4 w-auto " />
          Copy
        </button>
      </div>

      <div className="flex gap-6">
        <p className=" text-lg font-light">khprzybyl@gmail.com</p>
        <button
          onClick={() => copyToClipboard('khprzybyl@gmail.com')}
          className="flex items-center gap-2"
        >
          <img src={CopyIcon} alt="Github logo" className="h-4 w-auto" />
          Copy
        </button>
      </div>
      <Notification message="Copied to clipboard!" show={showNotification} />
      {/* <Notification message="Copied to clipboard!" show={true} /> */}
    </div>
  );
};

export default Contact;
