import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
            <div>
              <h2>Home</h2>
                <Link to="/matchroom">
                    <h2>Match Room</h2>
                </Link>
            </div>
     );
  }
}
 
export default Home;