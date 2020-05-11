import React from 'react';
import { Link } from 'react-router-dom';
import User1List from '../components/User1List';
import User2List from '../components/User2List';
import HeaderSmall from '../components/HeaderSmall';
import ApiKey from '../ApiKey';
import intersection from 'lodash/intersection';
import '../styles/UserList.css';
import Match from '../components/Match';

class MatchRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      apiList: [],
      user1List: [],
      user2List: [],
      matchList: [],
      index: 0,
      finishedSession: false,
      currentSession: 'user1',
      listIsLoading: true,
      fetchListError: false,
      newMatch: false
    };
  }

  handleValidate = () => {
    if (this.state.currentSession === 'user1') {
      const user1List = this.state.user1List.slice();
      user1List.push(this.state.apiList[this.state.index]);
      this.setState({
        user1List,
        index: this.state.index + 1,
        finishedSession: this.state.index === this.state.apiList.length - 1
      });
    } else {
      const user2List = this.state.user2List.slice();
      const user1List = this.state.user1List;
      user2List.push(this.state.apiList[this.state.index]);
      this.setState({
        user2List,
        index: this.state.index + 1,
        finishedSession: this.state.index === this.state.apiList.length - 1
      });

      const matchList = intersection(user1List, user2List);
      if (this.state.matchList.length < matchList.length) {
        this.handleMatch();
      }
      this.setState({ matchList });
    }
  };

  handleMatch = () => {
    this.setState({ newMatch: !this.state.newMatch });
  };

  handleReject = () => {
    this.setState({
      index: this.state.index + 1,
      finishedSession: this.state.index === this.state.apiList.length - 1
    });
  };

  handleSession = () => {
    const currentSession = 'user2';
    this.setState({ currentSession, index: 0, finishedSession: false });
  };

  handleReturn1 = () => {
    const user1List = this.state.user1List.slice();
    const currentId = this.state.index;
    this.setState({ index: currentId - 1 });
    if (user1List.includes(this.state.apiList[currentId - 1])) {
      user1List.pop();
      this.setState({ user1List });
    }
  };

  handleReturn2 = () => {
    const user2List = this.state.user2List.slice();
    const user1List = this.state.user1List.slice();
    const currentId = this.state.index;
    this.setState({ index: currentId - 1 });
    const matchList = intersection(user1List, user2List);
    if (
      user2List.includes(this.state.apiList[currentId - 1]) &&
      matchList.includes(this.state.apiList[currentId - 1])
    ) {
      user2List.pop();
      matchList.pop();
      this.setState({ user2List, matchList });
    } else if (user2List.includes(this.state.apiList[currentId - 1])) {
      user2List.pop();
      this.setState({ user2List });
    }
  };

  handleResult = () => {
    const matchList = [];
    this.setState({ matchList, newMatch: false });
  };

  getData = () => {
    const genreId = this.props.match.params.id;

    window
      .fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`
      )
      .then((response) => {
        return response.json().then((data) => {
          let randomPage = 0;
          if (data.total_pages < 20) {
            randomPage = Math.ceil(Math.random() * (data.total_pages - 1));
          } else {
            randomPage = Math.ceil(Math.random() * 20);
          }
          console.log(randomPage);
          window
            .fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&with_genres=${genreId}`
            )
            .then((response) => {
              return response
                .json()
                .then((data) => {
                  this.setState({
                    apiList: data.results,
                    listIsLoading: false
                  });
                })
                .catch(() => {
                  this.setState({ listIsLoading: false, fetchListError: true });
                });
            });
        });
      });
  }

  componentDidMount () {
    this.getData();
  }

  render () {
    const { user1, user2 } = this.props;
    if (this.state.listIsLoading) {
      return (
        <div>
          <HeaderSmall />
          <Link to='/result'>
            <h2>Result</h2>
          </Link>
          <p>En cours de chargement ...</p>
        </div>
      );
    } else if (this.state.fetchListError) {
      return (
        <div>
          <HeaderSmall />
          <Link to='/result'>
            <h2>Result</h2>
          </Link>
          <p>Erreur lors du chargement</p>
        </div>
      );
    } else {
      return this.state.currentSession === 'user1' ? (
        <User1List
          user1={user1}
          {...this.state}
          onHandleSession={this.handleSession}
          onHandleReject={this.handleReject}
          onHandleValidate={this.handleValidate}
          onHandleReturn={this.handleReturn1}
          user2={user2}
        />
      ) : (
        <>
          <User2List
            user2={user2}
            {...this.state}
            onHandleReject={this.handleReject}
            onHandleValidate={this.handleValidate}
            onHandleReturn={this.handleReturn2}
            getMatchList={this.props.getMatchList}
          />
          {this.state.newMatch && (
            <Match
              onHandleMatch={this.handleMatch}
              currentMatchedMovie={
                this.state.matchList[this.state.matchList.length - 1]
              }
            />
          )}
        </>
      );
    }
  }
}

export default MatchRoom;
