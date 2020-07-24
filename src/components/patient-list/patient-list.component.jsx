import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import './patient-list.styles.css';

class PatientList extends React.Component {
  state = {
      patients: null
  }
    
  componentDidMount(){
      firestore.collection('patients').get()
      //you 'get' data as a snapshot
      .then(snapshot => {
        //makes an array of patients
        const patients =[]  
        //iterates through them and pushes them
        snapshot.forEach(doc => {
              const data = doc.data()
              patients.push(data)
          })
          this.setState({patients: patients})
      }).catch(error => console.log(error))
  }

  
  render() {
    return (
      <div className="PatientList">
        <h1>Patients In Need</h1>
        {
          this.state.patients && 
          this.state.patients.map( patient => {
            return(
              <div>
                <p>{patient.name} -- {patient.status} -- {patient.email}</p>
              </div>
          )})
        }
      </div>
    )
  }
}

export default PatientList;