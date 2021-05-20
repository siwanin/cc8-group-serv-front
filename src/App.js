import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateNovelPage from "./pages/CreateNovelPage";
import ProfilePage from "./pages/ProfilePage";
import CreateEpisodePage from "./pages/CreateEpisodePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/createnovel" component={CreateNovelPage} />
        <Route exact path="/createepisode" component={CreateEpisodePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
