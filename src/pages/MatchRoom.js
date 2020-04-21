import React from "react";
import { Link } from "react-router-dom";
import User1List from "../components/User1List";
import User2List from "../components/User2List";

class MatchRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: "Tic",
      user2: "Tac",
      currentSession: "user1",
    };
  }

  handleSession = () => {
    const currentSession = "user2";
    this.setState({ currentSession });
  };

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
        {this.state.currentSession === "user1" ? (
          <User1List {...this.state} onClick={this.handleSession} />
        ) : (
          <User2List user2={this.state.user2} />
        )}
      </div>
    );
  }
}

export default MatchRoom;
