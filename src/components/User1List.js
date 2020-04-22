import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';

class User1List extends React.Component {
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
          <h2 className='subtitle'>{`À vous ${this.props.user1}`}</h2>
        </div>
        <h2 className='user-session'>Utilisateur : {this.props.user1}</h2>
        {this.state.finishedSession ? <Button txt={`Lancer session ${this.props.user2}`} onClick={this.props.onClick} /> : <FilmCard />}
      </div>
    );
  }
}

export default User1List;
