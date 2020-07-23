import React from 'react';
import { Link } from 'react-router-dom';



import './header.styles';

const Header = () => (
  <div className='header'>

    <div className='options'>
      <Link className='option' to='/home'>
        Home
      </Link>
      <Link className='option' to='/home'>
        Profile
      </Link>
    </div>
  </div>
);

export default Header;