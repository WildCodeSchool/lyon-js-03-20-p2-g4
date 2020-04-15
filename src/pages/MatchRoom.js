import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MatchRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
            <div>
                <h2>Match Room page</h2>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/result">
                    <h2>Result</h2>
                </Link>
            </div>
      );
  }
}
 
export default MatchRoom;