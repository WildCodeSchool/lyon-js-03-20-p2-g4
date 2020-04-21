import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';

function User1List (props) {
  return (
    <div className='user-list-container'>
      <div className='pop-up-user-session'>
        <h2 className='subtitle'>{`À vous ${props.user1}`}</h2>
      </div>
      <h2 className='user-session'>Utilisateur : {props.user1}</h2>
      <FilmCard />
    </div>
  );
}

export default User1List;
