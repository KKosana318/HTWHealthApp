import React from 'react';

import DoctorProfile from '../../components/doctor-profile/doctor-profile.component';

const UserPage = (props) => (
  <div className="user-page">
    <DoctorProfile/>
    {console.log(props)}
    {console.log(props.displayName)}
  </div>
);

export default UserPage;