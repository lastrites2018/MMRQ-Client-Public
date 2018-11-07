import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

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
  
  state = {
    modalOpen: false,
    backGround: false,
    modalPage: 1,
    modalData: [],
    modalStatus: false,
  };

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      backGround: true
    };
    cookies.get('token')
      ? (this.state = { login: true })
      : (this.state = { login: false });

    this.cookieSet = this.cookieSet.bind(this);
    this.logout = this.logout.bind(this);
  }

  modalDataChange = (data) => {
    this.setState({
      modalData: data,
      modalStatus: true,
    })
  };

  cookieSet = data => {
    const { cookies } = this.props;
    cookies.set('token', data.access_token, { path: '/', maxAge: 3600 });
    this.setState(prevState => ({ login: true }));

  };

  logout = () => {
    const { cookies } = this.props;
    cookies.remove('token');
    // this.setState = { login: false }; // 여기서 setState로 하면 헤더 변화 없음.
    this.setState(prevState => ({ login: false }));
    
  };

  modalOpenChange = () => {
    this.setState({
      modalStatus: !this.state.modalStatus,
    })
  };
  
  render() {
    return (
      <Router>
        <div>
            <div>
              <Header login={this.state.login} logout={this.logout} />              
            </div>
            <Switch>
              <Route path="/main" 
                render={() => 
                  <Main 
                    modalData={this.state.modalData}
                    modalStatus={this.state.modalStatus}
                    modalOpenChange={this.modalOpenChange}
                    modalDataChange={this.modalDataChange}
                    />
                } />
              <Route path="/post" component={Post} />
              <Route
              path="/login"
              // component={Login}
                render={() => <Login cookieSet={this.cookieSet} />}
              />
              <Route path="/mypage" component={Mypage} />
              <Route path="/search" component={Search} />
              <Route path="/signUp"  
                render={() => <SignUp cookieSet={this.cookieSet} />} />
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

// export default App;
export default withCookies(App);
