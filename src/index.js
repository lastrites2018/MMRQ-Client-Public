import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './index.css';
import App from "./App";

import Home from "./Home/Home";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={App} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
