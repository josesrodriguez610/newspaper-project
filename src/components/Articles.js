import moment from "moment";
import { useState } from "react";
import { stringCut } from "../util/data";

const Articles = ({ stateNews }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleOpen = () => {
    setMoreInfo(true);
  };

  const handleClose = () => {
    setMoreInfo(false);
  };

  return (
    <div className="articles-container">
      {stateNews.articles.map((article) => (
        <div className="article-container">
          <div className="top">
            <div className="left-container">
              <img
                src={
                  article.urlToImage === null
                    ? "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-or-vector-37375020.jpg"
                    : article.urlToImage
                }
                alt=""
              />
            </div>
            <div className="right-container">
              <div className="info">
                <span>{article.title}</span>
                <h5 className="date">
                  {moment().format("MMM Do YY", article.publishedAt)}
                </h5>
              </div>
              {!moreInfo && (
                <div className="article-button">
                  <button onClick={handleOpen}>More Info</button>
                </div>
              )}
            </div>
          </div>
          {moreInfo && (
            <div className="bottom">
              <p>{stringCut(article?.content)}</p>
              <div className="button">
                <button onClick={handleClose}>Less Info</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Articles;
