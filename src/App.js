import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import LandingPage from './pages/landing-page/landing-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UserPage from './pages/user-page/user-page.component';


const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/landing' component={ LandingPage } />
      <Route exact path='/signin' component={ SignInAndSignUpPage } />
      <Route exact path='/user' component={ UserPage } />
    </Switch>
  </div>
)

export default App;
