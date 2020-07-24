import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import PropTypes from "prop-types";

import { auth, addToUserProfileDocument } from '../../firebase/firebase.utils';

// import './sign-up.styles.css';

class PatientSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      user: ''
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(this.props.match.params.patientID);
    // this.setState({ user: })
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { comment } = this.state;
    const user = null;

    try {
      user = await auth.createUserWithEmailAndPassword(
        comment
      );
    } catch (error) {
      console.log(error);
    }
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
    console.log()
    const { comment } = this.state;
    return (
      <div className='comment'>
        <form className='sign-up-form' onSubmit={ this.handleSubmit }>
          <h2 className='cent'> Please put in your comments</h2>
          <br />
          <br />
          <br />
          <label>Comment</label>
          <FormInput
            type='text'
            name='comment'
            value={ comment }
            onChange={ this.handleChange }
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default PatientSubmit;