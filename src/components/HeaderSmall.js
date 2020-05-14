import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../images/logoSmall.svg';
import '../styles/HeaderSmall.css';

const HeaderSmall = (props) => {
  return (
    <header className='headerSmall'>
      <Link to='/'><img src={logoSmall} alt='full logo' className='logo' onClick={() => props.resetAppState()} /></Link>
    </header>
  );
};

export default HeaderSmall;
