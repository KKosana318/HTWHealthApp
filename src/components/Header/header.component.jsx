import React from 'react';
import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';


import './header.styles.css';

const Header = ({currentUser}) => (
  <div className='header'>

    <div className='options'>
      <Link className='option' to='/home'>
        Home
      </Link>
      <Link className='option' to='/home'>
        Profile
      </Link>
      {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>Sign Out</div>

          :
          <Link className='option' to='/signin'>
              SIGN IN
          </Link>
      }
    </div>
  </div>
);

export default Header;