import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RedirectApp from './comps/RedirectApp';
import './App.css';
import Home from "./comps/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = "/l/:code" component = {RedirectApp} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
