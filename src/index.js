import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './index.css';
import App from "./App";

import Home from "./Home";
import Main from "./routes/Main/Main";
import Posts from "./routes/Posts/Posts";
import Login from "./routes/Login/Login";
import Mypage from "./routes/Mypage/Mypage";
import Search from "./routes/Search/Search";
import SignUp from "./routes/SignUp/SignUp";
import NoMatch from "./routes/NoMatch/NoMatch";

import Header from "./components/Header";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
