import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { About2 } from "./components/about2";
import { AboutProject } from "./components/aboutProject";
import { Process } from "./components/process";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router basename="/IHC-Proyect">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Header data={landingPageData.Header} />
        </Route>
        <Route path="/proyecto-final">
          <div style={{ marginTop: "110px" }}>
            <About2 data={landingPageData.AboutProject} />
          </div>
          <Features data={landingPageData.Features} />
          <Process data={landingPageData.Process} />
        </Route>
        <Route path="/videojuego">
          <About data={landingPageData.About} />
          <Gallery data={landingPageData.Gallery} />
          <Process data={landingPageData.Process} />
        </Route>
        <Route path="/equipo">
          <Team data={landingPageData.Team} />
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
