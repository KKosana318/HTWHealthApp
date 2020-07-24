import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import LandingPage from './pages/landing-page/landing-page.component';
import TestPage from './pages/test-page/test-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UserPage from './pages/user-page/user-page.component';
import patientsubmit from './pages/submit-information/patient-sumbit.component'
import VideoPage from './pages/video-page/video-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//import firebase from './firebase/firebase.utils';

import Header from './components/Header/header.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }
      this.setState({ currentUser: userAuth });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (

      <div className='full-site-content'>
        <Route path='/' component={ (props) => (<Header routeProps={ props } currentUser={ this.state.currentUser } />) } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/landing' component={ LandingPage } />
          <Route exact path='/signin' component={ SignInAndSignUpPage } />
          <Route exact path='/user' component={ UserPage } />
          <Route exact path='/test' component={ TestPage } />
          <Route exact path='/video' component={ VideoPage } />
        </Switch>

      </div>
    );
  }
}
export default App;
