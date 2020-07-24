import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, BrandName, OptionsContainer, OptionContainer, AccountContainer } from './header.styles';

const Header = ({ currentUser, routeProps }) => (
  <HeaderContainer path={ routeProps }>
    <LogoContainer>
      <BrandName>Panacea</BrandName>
    </LogoContainer>
    <OptionsContainer>
      {
        currentUser ?
          <OptionContainer to='/'>
            Home
          </OptionContainer>
          :
          <div>
            <OptionContainer to='/landing'>
              Home
            </OptionContainer>
          </div>
      }
      <OptionContainer to='/video'>
        Video
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

