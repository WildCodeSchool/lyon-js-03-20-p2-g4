import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg';
import Return from '../images/return.svg';

class User1List extends React.Component {
  render () {
    return (
      <div className='user-list-container'>
        <div className='pop-up-user-session'>
          <h2 className='subtitle'>{`À vous ${this.props.user1}`}</h2>
        </div>
        {this.props.finishedSession ? <div className='centered'><Button content={`Lancer session ${this.props.user2}`} onClick={this.props.onHandleSession} className='button' /></div>
          : <><h2 className='user-session'>Utilisateur : {this.props.user1}</h2><FilmCard index={this.props.index} /><div className='session-button-container'><Button content={<img src={Reject} alt='reject button' />} className='session-button reject' onClick={this.props.onHandleReject} /><Button content={<img src={Return} alt='return button' />} className={(this.props.index > 0) ? ('session-button return') : ('session-button hidden-return')} onClick={this.props.onHandleReturn} /><Button content={<img src={Validate} alt='validate button' />} className='session-button validate' onClick={this.props.onHandleValidate} /></div></>}
      </div>
    );
  }
}

export default User1List;
