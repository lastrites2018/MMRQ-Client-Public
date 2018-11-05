import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './routes/Main/Main';
import Post from './routes/Post/Post';
import Login from './routes/Login/Login';
import Mypage from './routes/Mypage/Mypage';
import Search from './routes/Search/Search';
import SignUp from './routes/SignUp/SignUp';
import Find from './routes/Find/Find';
import Witness from './routes/Witness/Witness';
import NoMatch from './routes/NoMatch/NoMatch';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    cookies.get('test')
      ? (this.state = { login: true })
      : (this.state = { login: false });

    this.cookieSet = this.cookieSet.bind(this);
    this.logout = this.logout.bind(this);
  }

  cookieSet = data => {
    console.log('쿠키셋 실행?');
    const { cookies } = this.props;
    cookies.set('test', data.email, { path: '/', maxAge: 3600 });
    this.setState(prevState => ({ login: true }));
  };

  logout = () => {
    console.log('실행?');
    const { cookies } = this.props;
    cookies.remove('test');
    // this.setState = { login: false };
    this.setState(prevState => ({ login: false }));
  };

  render() {
    return (
      <Router>
        <div>
          <div>
            <Header logout={this.logout.bind(this)} />
          </div>
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/post" component={Post} />
            <Route
              path="/login"
              component={Login}
              render={props => (
                <Login {...props} cookieSet={this.cookieSet} someProp={100} />
              )}
            />
            {/* <Route path="/login" component={Login} cookieSet={this.cookieSet} /> */}
            <Route path="/mypage" component={Mypage} />
            <Route path="/search" component={Search} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/find" component={Find} />
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

// export default App;
export default withCookies(App);
