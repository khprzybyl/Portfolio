import React, { useState, useCallback } from 'react';
import Notification from './Notification';

import CopyableText from './CopyableText';
import { PersonalData } from './PersonalData';
import { NotificationMessage } from './MessageText';

const Contact: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = useCallback((text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 800);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center leading-6 static">
      <p className=" text-xl font-bold pb-6">{PersonalData.NAME}</p>
      <CopyableText text={PersonalData.PHONE} onCopy={copyToClipboard} />
      <CopyableText text={PersonalData.EMAIL} onCopy={copyToClipboard} />
      <Notification
        message={NotificationMessage.SUCCESS_COPY}
        show={showNotification}
      />
    </div>
  );
};

export default Contact;
