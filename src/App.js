import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css"

import Main from "./routes/Main/Main";
import Post from "./routes/Post/Post";
import Login from "./routes/Login/Login";
import Mypage from "./routes/Mypage/Mypage";
import Search from "./routes/Search/Search";
import SignUp from "./routes/SignUp/SignUp";
import Find from "./routes/Find/Find";
import Witness from "./routes/Witness/Witness";
import NoMatch from "./routes/NoMatch/NoMatch";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  
  state = {
    modalOpen: false,
    backGround: false,
    modalPage: 1,
    modalData: [],
    modalStatus: false,
  }

  modalDataChange = (data) => {
    this.setState({
      modalData: data,
      modalStatus: true,
    })
  }

  modalOpenChange = () => {
    this.setState({
      modalStatus: !this.state.modalStatus,
    })
  }
  
  render() {
    return (
      <Router>
        <div>
            <div>
              <Header />
            </div>
            <Switch>
              <Route path="/main" 
                render={() => 
                  <Main 
                    ///
                    modalData={this.state.modalData}
                    modalStatus={this.state.modalStatus}
                    modalOpenChange={this.modalOpenChange}
                    modalDataChange={this.modalDataChange}
                    />
                } />
              <Route path="/post" component={Post} />
              <Route path="/login" component={Login} />
              <Route path="/mypage" component={Mypage} />
              <Route path="/search" component={Search} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/find" 
                render={() => 
                  <Find 
                    modalData={this.state.modalData}
                    modalStatus={this.state.modalStatus}
                    modalOpenChange={this.modalOpenChange}
                    modalDataChange={this.modalDataChange}
                  />
                } />
              <Route path="/witness" component={Witness} />
              <Route component={NoMatch} />
            </Switch>
            <div>
              <Footer />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
