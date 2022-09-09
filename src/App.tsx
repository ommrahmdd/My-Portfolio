import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import "./App.scss";
import Footer from "./components/footer/Footer";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/projects/Projects"));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Router>
          <Menu />
          <Switch>
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
