import Articles from "../components/Articles";
import MoreStories from "../components/MoreStories";
import Slider from "../components/Slider";

const Home = ({ stateNews }) => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="left">
          <Slider stateNews={stateNews} />
          <Articles stateNews={stateNews} />
        </div>
        <div className="right">
          <MoreStories stateNews={stateNews} />
        </div>
      </div>
    </div>
  );
};

export default Home;
