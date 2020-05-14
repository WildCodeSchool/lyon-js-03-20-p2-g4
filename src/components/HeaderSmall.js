import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../images/logoSmall.svg';
import '../styles/HeaderSmall.css';

const HeaderSmall = () => {
  return (
    <header className='headerSmall'>
      <Link to='/'><img src={logoSmall} alt='full logo' className='logo' /></Link>
    </header>
  );
};

export default HeaderSmall;
