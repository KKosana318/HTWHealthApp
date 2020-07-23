import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import './doctor-profile.styles.css';

class DoctorProfile extends React.Component {
    state = {
        doctors: null
    }
      
    componentDidMount(){
        firestore.collection('doctors').get()
        //you 'get' data as a snapshot
        .then(snapshot => {
          //makes an array of the
          const doctors =[]  
          //iterates through them and pushes them
          snapshot.forEach(doc => {
                const data = doc.data()
                doctors.push(data)
            })
            this.setState({doctors: doctors})
        }).catch(error => console.log(error))
    }
  
    
    render() {
      return (
        <div className="doc-prof">
          <h1>Welcome Doctor </h1>
          <br></br>
          {
            this.state.doctors && 
            this.state.doctors.map( doctor => {
              return(
                <div>
                  <p>{doctor.fname} {doctor.lname}</p>
                </div>
            )})
          }
        </div>
      )
    }
  }
  
  export default DoctorProfile;