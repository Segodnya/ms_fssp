import React from "react";
import { Article } from "../Article/Article";
import "./News.css";
import { articles } from "../../assets/data/articles";

export function News() {
  return (
    <section className="flex news">
      <h2 className="news__title">Последние события</h2>
      {articles.map((article) => (
        <Article
          key={article.id}
          photo={article.photo}
          title={article.title}
          content={article.content}
        />
      ))}
    </section>
  );
}
