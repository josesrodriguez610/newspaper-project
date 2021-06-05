import { useState } from "react";
import "./styles/App.scss";
import news from "./util/testNews.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { navOptions } from "./util/data";

function App() {
  const [stateNews, setNews] = useState(news);

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Nav options={navOptions} />
          <Switch>
            <Route path="/">
              <Home stateNews={stateNews} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
