import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateNovelPage from "./pages/CreateNovelPage";
import OrderTest from "./pages/HomeTest";
import ReadNovel from "./pages/ReadNovel";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/createnovel" component={CreateNovelPage} />
        <Route exact path="/hometest" component={OrderTest} />
        <Route exact path="/read" component={ReadNovel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
