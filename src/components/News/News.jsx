import React, { useState } from "react";
import { articles } from "../../assets/data/articles";
import { Article } from "../Article/Article";
import { Button } from "../Button/Button";
import "./News.css";

export function News() {
  const latestArticles = [...articles].reverse();
  const [displayedArticles, setDisplayedArticles] = useState(5);

  const handleShowMore = () => {
    setDisplayedArticles((prevDisplayedArticles) => prevDisplayedArticles + 5);
  };

  const isShowMoreButtonVisible = displayedArticles < articles.length;

  return (
    <section className="flex news">
      <h2 className="news__title">Последние события</h2>
      {latestArticles.slice(0, displayedArticles).map((article) => (
        <Article
          key={article.id}
          photo={article.photo}
          date={article.date}
          title={article.title}
          content={article.content}
        />
      ))}
      {isShowMoreButtonVisible && (
        <Button className="news__show-more-button" onClick={handleShowMore}>
          Показать еще
        </Button>
      )}
    </section>
  );
}
