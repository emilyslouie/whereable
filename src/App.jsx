import "./App.css";
import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import LearnMorePage from "./pages/LearnMorePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/whereable/about" component={AboutPage} />
        <Route path="/whereable/learn" component={LearnMorePage} />
        <Route path="/whereable/" component={LandingPage} />
      </Switch>
    </>
  );
}

export default App;
