import React from 'react';
import { Link } from 'react-router-dom';

import './form-input.styles.css';

export const PatientProfile = props => (
    <div className = 'pprofile-container'>
        <Link className='option' to='/home'>
        <img 
            alt="patient" 
            src={`https://robohash.org/${props.patient.id}?set=set2&size=180x180`} 
        />
        </Link>
    </div>
)