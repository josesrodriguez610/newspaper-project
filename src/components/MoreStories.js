const MoreStories = ({ stateNews }) => {
  return (
    <div className="moreStories">
      <h3>Top Stories</h3>
      {stateNews.articles.slice(10, 15).map((article) => (
        <ul>
          <li>
            <a href={article.url} target="_blank">
              {article.title}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MoreStories;
