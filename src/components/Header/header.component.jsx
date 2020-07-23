import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, BrandName, OptionsContainer, OptionContainer, AccountContainer } from './header.styles';

const Header = ({ currentUser, routeProps }) => (
  <HeaderContainer path={ routeProps }>
    <LogoContainer>
      <BrandName>Brand</BrandName>
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer to='/home'>
        Home
      </OptionContainer>
      <OptionContainer to='/landing'>
        Landing
      </OptionContainer>
      <OptionContainer to='/signin'>
        Sign in/Sign up
      </OptionContainer>
      <OptionContainer to='/user'>
        User
      </OptionContainer>
      <OptionContainer to='/patient'>
        Patient
      </OptionContainer>
      {
        currentUser ?
          <AccountContainer onClick={ () => auth.signOut() }>Sign Out</AccountContainer>

          :
          <div>
            <AccountContainer to='/signin'>
              Sign in
          </AccountContainer>
            <AccountContainer to='/signin'>
              Sign up
          </AccountContainer>
          </div>
      }
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;

