import React from 'react';
import watchIcon from 'assets/svg/watch.svg';

interface ArticleTileProps {
  title: string;
  subtitle: string;
  description: string;
  onClickArticle: string;
  image: string;
}

const ArticleTile: React.FC<ArticleTileProps> = ({
  title,
  subtitle,
  description,
  onClickArticle,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center items-center m-auto bg-white rounded-lg max-w-md hover:scale-105 duration-300">
      <div className="p-6">
        <a
          href="https://dlabs.ai/blog/how-to-use-llms-in-a-software-developers-work-case-study-included/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-dark-blue font-bold text-2xl hover:text-orange">
            {title}
          </h1>
        </a>
        <h2 className="text-dark-blue py-5 text-base font-bold">{subtitle}</h2>
        <p className="text-dark-blue ">{description}</p>
        <a
          href={onClickArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mt-6 "
        >
          <button className="bg-yellow rounded-lg px-12 py-3 text-dark-blue text-base font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-none hover:bg-yellow-dark w-full">
            <img src={watchIcon} alt="Github logo" className="h-4 w-auto " />
            Read article
          </button>
        </a>
      </div>
      <img
        src={image}
        alt="Graphic illustration of AI-related items including neural networks, data analytics, machine learning, and robotics icons."
        className="w-full rounded-b-lg"
      />
    </div>
  );
};
export default ArticleTile;
