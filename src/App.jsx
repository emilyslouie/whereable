import "./App.css";
import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import LearnMorePage from "./pages/LearnMorePage";

function App() {
  return (
    <Switch>
      <Route path="/whereable/about" component={AboutPage} />
      <Route path="/whereable/learn" component={LearnMorePage} />
      <Route path="/whereable/" component={LandingPage} />
    </Switch>
  );
}

export default App;
