import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import CreateEpisodePage from "./pages/CreateEpisodePage";
import CreateNovelPage from "./pages/CreateNovelPage";
import Home from "../src/pages/Home";
import SignIn from "../src/pages/Signin";
import SignUp from "../src/pages/Signup";
import Profile from "../src/pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/createnovel" component={CreateNovelPage} />
        <Route exact path="/createepisode" component={CreateEpisodePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
          <Route
            path="/profile"
            component={() => <Profile authoried={true} />}
          />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
