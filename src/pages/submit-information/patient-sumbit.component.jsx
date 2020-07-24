import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.css';

class patientsubmit extends React.Component {
  constructor() {
    super()

    this.state = {
        comment: ''
    };
}

handleSubmit = async event => {
    event.preventDefault();

    const { comment } = this.state;

    try {
  
        await addToUserProfileDocument(user, { comment });
  
        this.setState({
          comment: ''
        });

      } catch (error) {
        console.error(error);
      }
    };

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

      render() {
        const { comment } = this.state;
        return (
          <div className='comment'>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <h2 className = 'cent'> Please put in your comments</h2>
            <br/>
            <br/>
            <br/>
              <label>Comment</label>
              <FormInput
                type='text'
                name='comment'
                value={comment}
                onChange={this.handleChange}
                required
              />
              <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
          </div>
        );
      }
    }
    
    export default patientsubmit;