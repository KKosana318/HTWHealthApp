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
      <div className='patient-list'>
          {
            this.state.patients && this.state.patients.map( patient => {
              return(
                  <div className='patient-container'>
                    <img 
                      src={`https://robohash.org/${patient.imageURL}?set=set4&size=180x180`}
                      alt='Picture'
                    />
                    <h2>{patient.displayName}</h2>
                    <p>Status: {patient.status}</p>
                    <p>Location: {patient.location}</p>
                  </div>
            )})
          }
      </div>
    )
  }
}

export default PatientList;