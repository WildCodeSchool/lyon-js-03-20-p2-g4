import React from 'react';
import { Link } from 'react-router-dom';
import User1List from '../components/User1List';
import User2List from '../components/User2List';

class MatchRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSession: 'user1'
    };
  }

  handleSession = () => {
    const currentSession = 'user2';
    this.setState({ currentSession });
  };

  render () {
    const { user1, user2 } = this.props;
    return (
      <div>
        <h2>Match Room page</h2>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/result'>
          <h2>Result</h2>
        </Link>
        {this.state.currentSession === 'user1' ? (
          <User1List user1={user1} {...this.state} onClick={this.handleSession} user2={user2} />
        ) : (
          <User2List user2={user2} {...this.state} />
        )}
      </div>
    );
  }
}

export default MatchRoom;
