import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import PatientSubmit from '../../pages//submit-information/patient-sumbit.component';
import CustomButton from '../custom-button/custom-button.component';

import './patient-list.styles.css';

class PatientList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: null,
      patientIDs: null
    }
  }

  componentDidMount() {
    firestore.collection('patients').get()
      //you 'get' data as a snapshot
      .then(snapshot => {
        console.log(snapshot);
        //makes an array of patients
        const patients = []
        //iterates through them and pushes them
        snapshot.forEach(doc => {
          const data = doc.data();
          console.log(doc.data);
          patients.push(data)
        })
        this.setState({ patients: patients })
      }).catch(error => console.log(error))
  }


  render() {
    return (
      <div className='patient-list'>
        {
          this.state.patients && this.state.patients.map(patient => {
            // console.log(patient);
            return (
              <div className='patient-container'>
                <img
                  src={ `{patient.imageURL}` }
                  alt='Picture'
                />
                <h2>{ patient.displayName }</h2>
                <p>Status: { patient.status }</p>
                <p>Location: { patient.location }</p>
                <Link id='submit-feedback' to={ `patient/${patient.email}` }>
                  Submit feedback
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PatientList;