import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./routes/Main/Main";
import Posts from "./routes/Posts/Posts";
import Login from "./routes/Login/Login";
import Mypage from "./routes/Mypage/Mypage";
import Search from "./routes/Search/Search";
import SignUp from "./routes/SignUp/SignUp";
import NoMatch from "./routes/NoMatch/NoMatch";
import Notification from './routes/Notification/Notification';

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div>
              <Header />
            </div>
            <Switch>
              <Route path="/main" component={Main} />
              <Route path="/posts" component={Posts} />
              <Route path="/login" component={Login} />
              <Route path="/mypage" component={Mypage} />
              <Route path="/search" component={Search} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/notification" component={Notification} />
              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
