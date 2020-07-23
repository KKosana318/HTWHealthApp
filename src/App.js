import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import LandingPage from './pages/landing-page/landing-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UserPage from './pages/user-page/user-page.component';
import {auth} from './firebase/firebase.utils';
import Header from './components/Header/header.component';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
      patients: []
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(

      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/landing' component={ LandingPage } />
          <Route exact path='/signin' component={ SignInAndSignUpPage } />
          <Route exact path='/user' component={ UserPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
