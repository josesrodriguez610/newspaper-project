const Articles = ({ stateNews }) => {
  return (
    <div className="articles-container">
      {stateNews.articles.map((article) => (
        <div className="article">
          <h3>{article.title}</h3>
          <img src={article.urlToImage} alt="" />
          <h2>{article.publishedAt}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
