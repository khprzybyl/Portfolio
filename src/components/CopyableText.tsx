import React from 'react';
import CopyIcon from '../assets/images/copyIcon.svg';

const CopyableText: React.FC = ({ text, onCopy }) => {
  return (
    <div className="flex gap-6 pb-4">
      <p className="text-lg font-light">{text}</p>
      <button onClick={() => onCopy(text)} className="flex items-center gap-2">
        <img src={CopyIcon} alt="Copy to clipboard" className="h-4 w-auto" />
        Copy
      </button>
    </div>
  );
};

export default CopyableText;
