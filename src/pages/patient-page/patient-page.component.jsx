import React from 'react';

import PatientList from '../../components/patient-list/patient-list.component';

import './patient-page.styles.scss';

const PatientPage = () => (
    <div className='patient-list'>
        <PatientList />
    </div>
)

export default PatientPage;