import * as React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading";
import Marquee from "react-fast-marquee";
import Project from "./pages/project/Project";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/projects/Projects"));
// const Project = lazy(() => import("./pages/project/Project"));
function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Menu />
          <Switch>
            <Route path="/project/:projectID" exact component={Project} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
