import React from 'react';

import SignIn from "../../components/sign-in/sign-in.components"
import SignUp from '../../components/sign-up/sign-up.component'
// import ImageUpload from '../../components/image-upload/image-upload';

import './sign-in-and-sign-up.styles.css';

class SignInAndSignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='sign-in-and-sign-up'>
                <SignIn />
                <div className='vert'></div>
                <SignUp />
            </div>
        )
    }
};

export default SignInAndSignUpPage;