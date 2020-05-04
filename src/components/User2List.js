import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg';
import { Link } from 'react-router-dom';

class User2List extends React.Component {
  render () {
    return (
      <div className='user-list-container'>
        <div className='pop-up-user-session'>
          <h2 className='subtitle'>{`À vous ${this.props.user2}`}</h2>
        </div>
        {this.props.finishedSession ? (
          <div className='centered'>
            <Link to='/result'>
              <Button
                content='Voir les résultats'
                className='button'
                onClick={() => {
                  this.props.getMatchList(this.props.matchList);
                }}
              />
            </Link>
          </div>
        ) : (
          <>
            <h2 className='user-session'>Utilisateur : {this.props.user2}</h2>
            <FilmCard index={this.props.index} apiList={this.props.apiList} />
            <div className='session-button-container'>
              <Button
                content={<img src={Reject} alt='reject button' />}
                className='session-button reject'
                onClick={this.props.onHandleReject}
              />
              <Button
                content={<img src={Validate} alt='validate button' />}
                className='session-button validate'
                onClick={this.props.onHandleValidate}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default User2List;
