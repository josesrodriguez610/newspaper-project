import moment from "moment";
import { useState } from "react";
import { stringCut } from "../util/data";
import { gsap } from "gsap";

const Articles = ({ stateNews }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [pickedId, setPickedId] = useState(null);
  const [onComplete, setOnComplete] = useState(false);

  let tl = gsap.timeline();

  const handleOpen = async (index) => {
    await tl
      .to(`.moreInfo-${index}`, { x: 200 })
      .from(
        `.bottom`,
        { timeScale: 1 },
        { timeScale: 15, ease: "SlowMo.ease" }
      );
    setMoreInfo(true);
    setPickedId(index);
    tl.to(`.lessInfo-${index}`, { x: 0, duration: 0.5, delay: 0.4 });
  };

  const handleClose = async (index) => {
    await tl
      .to(`.lessInfo-${index}`, {
        duration: 0.5,
        delay: 0.3,
        x: 200,
      })
      .from(
        `.bottom`,
        { timeScale: 1 },
        { timeScale: 15, ease: "SlowMo.ease" }
      );
    tl.to(`.moreInfo-${index}`, { x: 0, duration: 0.5, delay: 0.2 });
    setPickedId(null);
  };

  return (
    <div className="articles-container">
      {stateNews.articles.map((article, index) => (
        <div key={index} className="article-container">
          <div className="top">
            <div className="left-container">
              <img
                src={
                  article.urlToImage === null
                    ? "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-or-vector-37375020.jpg"
                    : article.urlToImage
                }
                alt={article?.urlToImage}
              />
            </div>
            <div className="right-container">
              <div className="info">
                <span>{article.title}</span>
                <h5 className="date">
                  {moment().format("MMM Do YY", article.publishedAt)}
                </h5>
              </div>
              <div
                style={{
                  display: pickedId !== index ? "inline" : "none",
                }}
                className="article-button"
              >
                <button
                  className={`moreInfo-${index}`}
                  onClick={() => handleOpen(index)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          <div
            className="bottom"
            style={{ display: pickedId === index ? "inline" : "none" }}
          >
            <p>{stringCut(article?.content)}</p>
            <div className="button">
              <button
                className={`lessInfo-${index}`}
                onClick={() => handleClose(index)}
              >
                Less Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
