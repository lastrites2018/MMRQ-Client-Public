import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./app.css";

import Main from "./routes/Main/Main";
import Post from "./routes/Post/Post";
import Login from "./routes/Login/Login";
import Mypage from "./routes/Mypage/Mypage";
import SignUp from "./routes/SignUp/SignUp";
import Find from "./routes/Find/Find";
import Witness from "./routes/Witness/Witness";
import NoMatch from "./routes/NoMatch/NoMatch";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      backGround: false,
      modalPage: 1,
      modalData: [],
      modalStatus: false
    };
    const { cookies } = props;

    cookies.get("token")
      ? (this.state = { login: true })
      : (this.state = { login: false });

    this.cookieSet = this.cookieSet.bind(this);
    this.logout = this.logout.bind(this);
  }

  modalDataChange = data => {
    this.setState({
      modalData: data,
      modalStatus: true
    });
  };

  componentDidMount = () => {
    if (this.state.login) {
      this._loadUser();
      // }
    }
  };

  //   componentDidUpdate = (prevProps, prevState) => {
  //     // if(prevState.input !== this.state.input){
  //       if (this.state.login) {
  //       this._loadUser()
  //     // }
  //   }
  // }

  _loadUser = () => {
    // _loadUser = async () => {
    const { cookies } = this.props;
    const token = cookies.get("token");
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    console.log("config", config);
    // Axios.get('http://localhost:5000/auth/check', config).then(response => {
    axios.get("http://34.217.9.241/auth/check", config).then(response => {
      console.log("responseUserInfo", response.data.userInfo);
      // this.setState({ userInfo: response.data.userInfo });
      this.setState(prevState => ({ userInfo: response.data.userInfo }));
    });
  };
  getUserInfo = value => {
    this.setState({
      userInfo: value
    });
  };
  cookieSet = data => {
    const { cookies } = this.props;
    cookies.set("token", data.access_token, { path: "/", maxAge: 3600 });
    this.setState(prevState => ({ login: true }));
  };

  logout = () => {
    const { cookies } = this.props;
    cookies.remove("token");
    // this.setState = { login: false }; // 여기서 setState로 하면 헤더 변화 없음.
    this.setState(prevState => ({ login: false }));
  };

  modalOpenChange = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    });
  };

  render() {
    return (
      <Router>
        <div>
          <div>
            <Header login={this.state.login} logout={this.logout} />
          </div>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route
              path="/post"
              render={() => <Post userInfo={this.state.userInfo} />}
            />
            <Route
              path="/login"
              // component={Login}
              render={() => (
                <Login
                  cookieSet={this.cookieSet}
                  getUserInfo={this.getUserInfo}
                />
              )}
            />
            <Route
              path="/mypage"
              render={() => <Mypage userInfo={this.state.userInfo} />}
            />
            <Route
              path="/signUp"
              render={() => <SignUp cookieSet={this.cookieSet} />}
            />
            <Route
              path="/find"
              render={() => (
                <Find
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
            <Route
              path="/witness"
              render={() => (
                <Witness
                  modalData={this.state.modalData}
                  modalStatus={this.state.modalStatus}
                  modalOpenChange={this.modalOpenChange}
                  modalDataChange={this.modalDataChange}
                />
              )}
            />
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

// export default App;
export default withCookies(App);
