import React from 'react';

import DoctorProfile from '../../components/doctor-profile/doctor-profile.component';

const UserPage = (props) => (
  <div className="user-page">
    <DoctorProfile currentUser = {props.currentUser}/>
  </div>
);

export default UserPage;