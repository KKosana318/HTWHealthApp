import React from 'react';

import { auth, firestore } from '../../firebase/firebase.utils';

import './doctor-profile.styles.css';

class DoctorProfile extends React.Component {
    state = {
        doctors: null,
    }
      
    componentDidMount(){

        firestore.collection('doctors').get().then(snapshot => {
          //makes an array of the
          const doctors =[]  
          //iterates through them and pushes them
          snapshot.forEach(doc => {
                const data = doc.data()
                doctors.push(data)
            })
            this.setState({doctors: doctors})
        })
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
                  <p>{doctor.displayName}</p>
                </div>
            )})
          }
        </div>
      )
    }
  }
  
  export default DoctorProfile;