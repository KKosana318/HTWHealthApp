import React from 'react';
import * as Scroll from 'react-scroll';
//eslint-disable-next-line
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import TextImageModule from '../../components/text-image-module/text-image-module.component';

import { LandingPageContainer, TopModule, TextContainer, FeaturesContainer, GetStartedContainer, GetStartedButton } from './landing-page.styles';

const LandingPage = () => (
  <LandingPageContainer>
    <TopModule>
      <TextContainer>
        <h1>Join a Global Shift in Healthcare Access</h1>
        <p>Use our technology to bring your medical expertise to communities that lack access to immediate healthcare.</p>
        {/* <Link activeClass="active" to="test1" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }>
          Test 1
        </Link> */}
      </TextContainer>
    </TopModule>
    <FeaturesContainer>
      <TextImageModule name="test1" image={ 'https://images.vexels.com/media/users/3/136170/isolated/preview/1a0fc726567fe21282676126358b795d-heart-disease-logo-by-vexels.png' } title={ 'Remotely diagnose health conditions' } content={ 'Use comprehensive data provided by patients in rural and low-access areas to remotely diagnose health conditions.' } />
      <TextImageModule image={ 'https://www.nicepng.com/png/full/423-4231033_medical-clipart-emergency-medicine-emergency-room-nurse-clipart.png' } title={ 'Address health emergencies' } content={ 'Respond to patients in emergency situations by suggesting treatment options for communities with limited equipment with help from our health analysis AI tools.' } />
      <TextImageModule image={ 'https://static.thenounproject.com/png/82045-200.png' } title={ 'Check in regularly with patients over video' } content={ 'Use our built-in video conferencing capabilities to chat live with patients for regular check-ups, answering health questions, and addressing minor health concerns.' } />
    </FeaturesContainer>
    <GetStartedContainer>
      <h1>Get started today</h1>
      <p>Create an account today to start serving global communities from the comfort of your own device.</p>
      <GetStartedButton to='/signin'>Sign up today</GetStartedButton>
    </GetStartedContainer>
  </LandingPageContainer>
);

export default LandingPage;