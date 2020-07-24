import React from 'react';

import PatientList from '../../components/patient-list/patient-list.component';

import { HomePageContainer, UpdatesContainer, PatientsContainer } from './home-page.styles';

const HomePage = () => (
  <HomePageContainer>
    <h1>Dashboard</h1>
    <UpdatesContainer>
      <h2>Latest updates</h2>
    </UpdatesContainer>
    <PatientsContainer>
      <h2>Your patients</h2>
      <PatientList />
    </PatientsContainer>
  </HomePageContainer>
);

export default HomePage;