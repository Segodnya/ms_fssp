import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Article.css";

export const Article = (props) => {
  const { photo, title, content } = props;
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(true);
  };

  const paragraphs = content.split("\n");
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <article className="news__card" onClick={toggleFullText}>
      <div className="news__card-image-wrapper">
        <img className="news__card-image" src={photo} alt="" />
        <div className="news__card-gradient"></div>
        <h3 className="news__card-title">{title}</h3>
      </div>
      <p className={`news__card-p ${showFullText ? "" : "line-clamp"}`}>
        {firstParagraph}
      </p>

      {showFullText &&
        remainingParagraphs.map((paragraph, index) => (
          <p className="news__card-p" key={index}>
            {paragraph}
          </p>
        ))}

      {!showFullText && (
        <p className="news__card-p news__card-p_highlighted">Читать далее</p>
      )}
    </article>
  );
};

Article.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
