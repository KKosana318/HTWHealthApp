import React from 'react';

import './form-input.styles.css';

export const PatientProfile = props => (
    <div className = 'pprofile-container'>
        <img 
            alt="patient" 
            src={`https://robohash.org/${props.patient.id}?set=set2&size=180x180`} 
        />
        <h2>{props.patient.name}</h2>
        <h2>{props.patient.severity}</h2>
    </div>
)