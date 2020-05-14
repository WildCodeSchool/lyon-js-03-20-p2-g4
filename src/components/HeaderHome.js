import React from 'react';
import logoFull from '../images/logoFull.svg';
import logoFullWhite from '../images/movie-match-dark-background.png';
import '../styles/HeaderHome.css';

const HeaderHome = () => {
  return (
    <header className='headerHome'>
      <img src={logoFull} alt='full logo' className='logo' />
      <img src={logoFullWhite} alt='full logo' className='logo-white' />
      <h1 className='small-screens'>Trouver un film à regarder ce soir !</h1>
      <span className='borderBottom' />
    </header>
  );
};

export default HeaderHome;
