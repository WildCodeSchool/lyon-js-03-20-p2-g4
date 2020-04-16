import React from 'react';
import './styles/App.css';
import UsersInputs from './components/UsersInputs';
import HeaderHome from './components/HeaderHome';

function App () {
  return (
    <div className='App'>
      <HeaderHome />
      <UsersInputs />
    </div>
  );
}

export default App;
