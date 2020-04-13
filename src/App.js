import React from 'react';
import './App.css'
import logoFull from './images/logoFull.svg';

console.log(logoFull);

function App () {
  return (
    <div className='App'>
      <img src={logoFull} alt='full logo' className='logo' />
      <h1>TROUVER UN FILM A REGARDER CE SOIR !</h1>
    </div>
  );
}

export default App;
