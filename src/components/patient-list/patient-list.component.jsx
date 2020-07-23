import React from 'react';

import { auth, firestore } from '../../firebase/firebase.utils';

import './patient-list.styles.css';

class PatientList extends React.Component {
  state = {
      users: null
  }
    
  componentDidMount(){
      firestore.collection('users').get()
      //you 'get' data as a snapshot
      .then(snapshot => {
        //makes an array of users
        const users =[]  
        //iterates through them and pushes them
        snapshot.forEach(doc => {
              const data = doc.data()
              users.push(data)
          })
          this.setState({users: users})
      }).catch(error => console.log(error))
  }

  
  render() {
    return (
      <div className="PatientList">
        <h1>Patients In Need</h1>
        {
          this.state.users && 
          this.state.users.map( user => {
            return(
              <div>
                <p>{user.email}</p>
              </div>
          )})
        }
      </div>
    )
  }
}

export default PatientList;