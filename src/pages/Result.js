import React from 'react';
import { Link } from 'react-router-dom';

class Result extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h2>Result page</h2>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/matchroom'>
          <h2>Match Room</h2>
        </Link>
      </div>
    );
  }
}

export default Result;
