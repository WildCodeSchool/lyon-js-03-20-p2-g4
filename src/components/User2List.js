import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';
import { Link } from 'react-router-dom';

class User2List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      finishedSession: false
    };
  }

  render () {
    return (
      <div className='user-list-container'>
        <div className='pop-up-user-session'>
          <h2 className='subtitle'>{`À vous ${this.props.user2}`}</h2>
        </div>
        <h2 className='user-session'>Utilisateur : {this.props.user2}</h2>
        {this.state.finishedSession ? <Link to="/result"><Button content={"Voir le résultat"} /></Link> : <FilmCard />}
      </div>
    );
  }
}

export default User2List;

