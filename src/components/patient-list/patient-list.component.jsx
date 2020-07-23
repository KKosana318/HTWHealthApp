import React from 'react';

import {PatientProfile} from '../patient-profile/patient-profile.component';

import './patient-list.styles.css';

const PatientList = props => (
  <div className='patient-list'>
  {
    props.patients.map(patient => (<PatientProfile key={patient.id} patient = {patient} />))
  }
  </div>
);

export default PatientList;