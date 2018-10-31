import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./routes/Main/Main";
import Post from "./routes/Post/Post";
import Login from "./routes/Login/Login";
import Mypage from "./routes/Mypage/Mypage";
import Search from "./routes/Search/Search";
import SignUp from "./routes/SignUp/SignUp";
import Find from "./routes/Find/Find";
import Witness from "./routes/Witness/Witness";
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
              <Route path="/post" component={Post} />
              <Route path="/login" component={Login} />
              <Route path="/mypage" component={Mypage} />
              <Route path="/search" component={Search} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/find" component={Find} />
              <Route path="/witness" component={Witness} />

              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
