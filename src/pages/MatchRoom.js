import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg';

class MatchRoom extends React.Component {
  render () {
    return (
      <div>
        <h2>Match Room page</h2>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/result'>
          <h2>Result</h2>

        </Link>
        <div className='session-button-container'>
          <Button content={<img src={Reject} alt='reject button' />} className='session-button reject' />
          <Button content={<img src={Validate} alt='validate button' />} className='session-button validate' />
        </div>
      </div>
    );
  }
}

export default MatchRoom;
