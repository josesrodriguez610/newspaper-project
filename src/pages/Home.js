import Slider from "../components/Slider";

const Home = ({ stateNews }) => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="left">
          <Slider stateNews={stateNews} />
        </div>
        <div className="right">
          <h1>Hi</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
