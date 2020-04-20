import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';

function User1List (props) {
  return (
    <div>
      <h2 className='user-session'>Utilisateur : {props.user1}</h2>
      <FilmCard />
    </div>
  );
}

export default User1List;
