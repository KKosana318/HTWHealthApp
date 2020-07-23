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
      .then(snapshot =>{
        const users =[]  
        snapshot.forEach(doc => {
              const data = doc.data()
              users.push(data)
          })
          this.setState({users: users})
          console.log(snapshot)
      }).catch(error => console.log(error))
  }

  
  render() {
    return (
      <div className="PatientList">
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
    );
  }
}

export default PatientList;