import React from 'react';
import logoSmall from '../images/logoSmall.svg';
import '../styles/HeaderSmall.css';

const HeaderSmall = () => {
  return (
    <header className='headerSmall'>
      <img src={logoSmall} alt='full logo' className='logo' />
    </header>
  );
};

export default HeaderSmall;
