import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import newCreateNovelPage from "./pages/newCreateNovelPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/newcreatenovel" component={newCreateNovelPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
