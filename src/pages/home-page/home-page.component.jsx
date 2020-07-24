import React from 'react';

import PatientList from '../../components/patient-list/patient-list.component';

import { HomePageContainer, UpdatesContainer, PatientsContainer } from './home-page.styles';

const HomePage = ({ user }) => (
  <HomePageContainer>
    <h1>Dashboard</h1>
    <UpdatesContainer>
      <h2>Latest updates</h2>
      <p>Up to date!</p>
    </UpdatesContainer>
    <PatientsContainer>
      <h2>Your patients</h2>
      <PatientList user={ user } />
    </PatientsContainer>
  </HomePageContainer>
);

export default HomePage;