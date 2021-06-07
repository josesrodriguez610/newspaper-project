import { useEffect, useState } from "react";
import "./styles/App.scss";
import news from "./util/testNews.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { navOptions } from "./util/data";
import ModalTab from "./components/ModalTab";

function App() {
  const [stateNews, setNews] = useState(news);
  const [modalBool, setModalBool] = useState(false);

  useEffect(() => {
    setTimeout(() => setModalBool(true), 2000);
  }, []);

  return (
    <Router>
      <div className="app">
        {modalBool && (
          <ModalTab modalBool={modalBool} setModalBool={setModalBool} />
        )}
        <div className="app-container">
          <Nav options={navOptions} setModalBool={setModalBool} />
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
