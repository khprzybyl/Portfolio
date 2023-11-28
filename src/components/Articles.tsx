import React from 'react';

import { ArticlesPack } from './data';
import ArticleTile from './ArticleTile';

const Articles = () => {
  return (
    <div className="my-10">
      <h1 className="flex max-w-4xl m-auto text-4xl font-bold mb-10 justify-center">
        Dive into my articles!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-5xl m-auto auto-rows-fr">
        {ArticlesPack.map((article) => (
          <ArticleTile
            key={article.id}
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            onClickArticle={article.onClickArticle}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
