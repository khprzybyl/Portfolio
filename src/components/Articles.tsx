import React from 'react';

import { ArticlesPack } from './data';
import ArticleTile from './ArticleTile';

const Articles = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-10">
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
  );
};

export default Articles;
