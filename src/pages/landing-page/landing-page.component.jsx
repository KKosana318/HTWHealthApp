import React from 'react';
// eslint-disable-next-line
import * as Scroll from 'react-scroll';
// eslint-disable-next-line
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import heart from '../../images/heart.png';
import bed from '../../images/bed.png';
import call from '../../images/call.png';
import TextImageModule from '../../components/text-image-module/text-image-module.component';

import { LandingPageContainer, TopModule, TextContainer, FeaturesContainer, GetStartedContainer, GetStartedButton } from './landing-page.styles';

const LandingPage = () => (
  <LandingPageContainer>
    <TopModule>
      <TextContainer>
        <img src="https://i.ibb.co/hXhmpkq/logo.png" alt="" height='150px' />
        <h1>Join a Global Shift in Healthcare Access</h1>
        <p>Use our technology to bring your medical expertise to communities that lack access to immediate healthcare.</p>

      </TextContainer>
    </TopModule>
    <FeaturesContainer>
      <TextImageModule name="test1" image={ heart } title={ 'Remotely diagnose health conditions' } content={ 'Use comprehensive data provided by patients in rural and low-access areas to remotely diagnose health conditions.' } />
      <TextImageModule image={ bed } title={ 'Address health emergencies' } content={ 'Respond to patients in emergency situations by suggesting treatment options for communities with limited equipment.' } />
      <TextImageModule image={ call } title={ 'Check in regularly with patients over video' } content={ 'Use our built-in video conferencing capabilities to chat live with patients for regular check-ups, answering health questions, and addressing minor health concerns.' } />
    </FeaturesContainer>
    <GetStartedContainer>
      <h1>Get started today</h1>
      <p>Create an account today to start serving global communities from the comfort of your own device.</p>
      <GetStartedButton to='/signin'>Sign up today</GetStartedButton>
    </GetStartedContainer>
  </LandingPageContainer>
);

export default LandingPage;