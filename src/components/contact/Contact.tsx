import React, { useState, useCallback } from 'react';
import Notification from '../shared/notification/Notification.tsx';

import CopyableText from '../shared/IconCopy.tsx';
import { ContactData } from './contactData';
import { NotificationMessage } from '../shared/notification/notificationText.ts';

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
      <p className=" text-xl font-bold pb-6">{ContactData.NAME}</p>
      <CopyableText text={ContactData.PHONE} onCopy={copyToClipboard} />
      <CopyableText text={ContactData.EMAIL} onCopy={copyToClipboard} />
      <Notification
        message={NotificationMessage.SUCCESS_COPY}
        show={showNotification}
      />
    </div>
  );
};

export default Contact;
