import React from "react";
import { Link } from "react-router-dom";
import User1List from "../components/User1List";
import User2List from "../components/User2List";
import HeaderSmall from "../components/HeaderSmall";

class MatchRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiList: [],
      user1List: [],
      user2List: [],
      index: 0,
      finishedSession: false,
      currentSession: "user1",
    };
  }

  handleValidate = () => {
    const user1List = this.state.user1List.slice();
    user1List.push(this.state.apiList[this.state.index]);
    this.setState({
      user1List,
      index: this.state.index + 1,
      finishedSession: this.state.index === this.state.apiList.length - 1,
    });
  };

  handleReject = () => {
    this.setState({
      index: this.state.index + 1,
      finishedSession: this.state.index === this.state.apiList.length - 1,
    });
  };

  handleSession = () => {
    const currentSession = "user2";
    this.setState({ currentSession });
  };

  getData = async () => {
    const genreId = this.props.match.params.id;
    const apiList = await window
      .fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=fcbb1bd6a2b486386efe153e5874f9ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      )
      .then((response) => {
        return response
          .json()
          .then((data) => {
            return data.results;
          })
          .catch(() => console.error("api not responding with the list"));
      });
    this.setState({ apiList });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { user1, user2 } = this.props;
    if (this.state.apiList[0] !== undefined) {
      return (
        <div>
          <HeaderSmall />
          <Link to="/result">
            <h2>Result</h2>
          </Link>
          {this.state.currentSession === "user1" ? (
            <User1List
              user1={user1}
              {...this.state}
              onHandleSession={this.handleSession}
              onHandleReject={this.handleReject}
              onHandleValidate={this.handleValidate}
              user2={user2}
            />
          ) : (
            <User2List user2={user2} />
          )}
        </div>
      );
    } else {
      return <p>Loading ...</p>;
    }
  }
}

export default MatchRoom;
