import React from 'react';
import User1List from '../components/User1List';
import User2List from '../components/User2List';
import HeaderSmall from '../components/HeaderSmall';
import ApiKey from '../ApiKey';
import intersection from 'lodash/intersection';
import '../styles/UserList.css';
import '../styles/MatchRoom.css';
import Match from '../components/Match';
import { Alert } from 'reactstrap';
import { Ellipsis } from 'react-awesome-spinners';
import History from '../components/History';

class MatchRoom extends React.Component {
  constructor(props) {
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
      newMatch: false,
      alertDisplay: true
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
      const historyList = document.getElementsByClassName('history-film-card');
      const historyListContainer = document.getElementsByClassName('timeline-movie-container');
      historyListContainer[this.state.index].classList.remove('hidden');
      historyListContainer[this.state.index].classList.add('validated');
      historyList[this.state.index].classList.remove('hidden');
      historyList[this.state.index].classList.add('validated');
      //document.getElementById('timeline-container').scrollTo(0, 0);
    } else {
      const user2List = this.state.user2List.slice();
      const user1List = this.state.user1List;
      user2List.push(this.state.apiList[this.state.index]);
      this.setState({
        user2List,
        index: this.state.index + 1,
        finishedSession: this.state.index === this.state.apiList.length - 1
      });
      const historyList = document.getElementsByClassName('history-film-card');
      const historyListContainer = document.getElementsByClassName('timeline-movie-container');
      historyListContainer[this.state.index].classList.remove('hidden');
      historyListContainer[this.state.index].classList.add('validated');
      historyList[this.state.index].classList.remove('hidden');
      historyList[this.state.index].classList.add('validated');
      // document.getElementById('timeline-container').scrollTo(0, 0);

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
    const historyList = document.getElementsByClassName('history-film-card');
    const historyListContainer = document.getElementsByClassName('timeline-movie-container');
    historyListContainer[this.state.index].classList.remove('hidden');
    historyListContainer[this.state.index].classList.add('rejected');
    historyList[this.state.index].classList.remove('hidden', 'validated');
    historyList[this.state.index].classList.add('rejected');
    // document.getElementById('timeline-container').scrollTo(0, 0);
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
    const historyListContainer = document.getElementsByClassName('timeline-movie-container');
    const historyList = document.getElementsByClassName('history-film-card');
    historyListContainer[this.state.index - 1].classList.remove('validated');
    historyListContainer[this.state.index - 1].classList.remove('rejected');
    historyList[this.state.index - 1].classList.remove('validated');
    historyList[this.state.index - 1].classList.remove('rejected');
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
    const type = this.props.match.params.type;
    const id = this.props.match.params.id;

    if (type === 'genres') {
      window
        .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${id}`)
        .then((response) => {
          return response.json().then((data) => {
            let randomPage = 0;
            if (data.total_pages < 15) {
              randomPage = Math.ceil(Math.random() * (data.total_pages - 1));
            } else {
              randomPage = Math.ceil(Math.random() * 15);
            }
            console.log('page aléatoire :' + randomPage);
            window
              .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&with_genres=${id}`)
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
    } else if (type === 'people') {
      window
        .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_people=${id}`)
        .then((response) => {
          return response.json().then((data) => {
            let randomPage = 0;
            if (data.total_pages < 15) {
              randomPage = Math.ceil(Math.random() * (data.total_pages - 1));
            } else {
              randomPage = Math.ceil(Math.random() * 15);
            }
            window
              .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&with_people=${id}`)
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
    } else if (type === 'decades') {
      const finalYear = (parseInt(id) + 9).toString();
      window
        .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_date.gte=${id}-01-01&primary_release_date.lte=${finalYear}-12-31`)
        .then((response) => {
          return response.json().then((data) => {
            let randomPage = 0;
            if (data.total_pages < 15) {
              randomPage = Math.ceil(Math.random() * (data.total_pages - 1));
            } else {
              randomPage = Math.ceil(Math.random() * 15);
            }
            console.log('page aléatoire :' + randomPage);
            window
              .fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&primary_release_date.gte=${id}-01-01&primary_release_date.lte=${finalYear}-12-31`)
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
  }

  onDismiss = () => {
    this.setState({ alertDisplay: false });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { user1, user2 } = this.props;
    if (this.state.listIsLoading) {
      return (
        <div>
          <HeaderSmall />
          <div className='matchroom centered'>
            <Ellipsis color='#66C69B' />
          </div>
        </div>
      );
    } else if (this.state.fetchListError) {
      return (
        <>
          <HeaderSmall />
          <div className='matchroom centered'>
            <Alert
              color='danger'
              isOpen={this.state.alertDisplay}
              toggle={this.onDismiss}
            >
              <span role='img' aria-label='confused face'>
                😕
              </span>{' '}
              Erreur lors du chargement !
            </Alert>
          </div>
        </>
      );
    } else {
      return this.state.currentSession === 'user1' ? (
        <>
          <User1List
            user1={user1}
            {...this.state}
            onHandleSession={this.handleSession}
            onHandleReject={this.handleReject}
            onHandleValidate={this.handleValidate}
            onHandleReturn={this.handleReturn1}
            user2={user2}
          />
          <History {...this.state} user1={user1} user2={user2} type={this.props.match.params.type} id={this.props.match.params.id} />
        </>
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
            <History {...this.state} user1={user1} user2={user2} type={this.props.match.params.type} id={this.props.match.params.id} />
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
