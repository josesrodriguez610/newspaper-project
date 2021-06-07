const MoreStories = ({ stateNews }) => {
  return (
    <div className="moreStories">
      <h3>Top Stories</h3>
      {stateNews.articles.slice(10, 15).map((article) => (
        <ul>
          <li>{article.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default MoreStories;
