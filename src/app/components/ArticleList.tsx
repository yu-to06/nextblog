import React from "react";
import {Article} from "../../types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};
const ArticleList = ({articles}: ArticleListProps) => {
  return (
    <div>
      {articles
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
    </div>
  );
};

export default ArticleList;
