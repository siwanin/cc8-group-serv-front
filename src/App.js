import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateNovelPage from "./pages/CreateNovelPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/createnovel" component={CreateNovelPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
