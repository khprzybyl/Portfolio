import React from 'react';

interface IconListProps {
  href: string;
  imgSrc: string;
  altText: string;
  text?: string;
}

const IconList: React.FC<IconListProps> = ({ href, imgSrc, altText, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center relative hover:scale-125`}
    >
      {text && (
        <p className="text-yellow font-bold text-lg absolute -top-3 -left-5">
          {text}
        </p>
      )}
      <img src={imgSrc} alt={altText} className="h-6 w-auto" />
    </a>
  );
};

export default IconList;
