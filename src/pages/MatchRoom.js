import React from 'react';
import { Link } from 'react-router-dom';
import User1List from '../components/User1List';
import User2List from '../components/User2List';
import HeaderSmall from '../components/HeaderSmall';

const initialList = [
  {
    popularity: 220.799,
    vote_count: 2868,
    video: false,
    poster_path: '/qi6qwClvTfZJiI5GhsKbtkqg28W.jpg',
    id: 454626,
    adult: false,
    backdrop_path: '/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
    original_language: 'en',
    original_title: 'Sonic the Hedgehog',
    genre_ids: [28, 35, 878, 10751],
    title: 'Sonic le film',
    vote_average: 7.5,
    overview:
      "L'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison. Sonic et son nouveau meilleur ami Tom font équipe pour sauver la planète du diabolique Dr. Robotnik, bien déterminé à régner sur le monde entier.",
    release_date: '2020-02-12'
  },
  {
    popularity: 199.496,
    vote_count: 147,
    video: false,
    poster_path: '/iBvo3qOPcmhlqAaJcXcQHtx2qLk.jpg',
    id: 664767,
    adult: false,
    backdrop_path: '/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg',
    original_language: 'en',
    original_title: 'Mortal Kombat Legends: Scorpions Revenge',
    genre_ids: [28, 12, 16, 14],
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    vote_average: 8.5,
    overview:
      "Lord Raiden, protecteur d'Earthrealm, doit rassembler les plus grands combattants de son royaume pour le défendre du démoniaque Shang Tsung dans une bataille ultime.",
    release_date: '2020-04-12'
  },
  {
    popularity: 204.235,
    id: 38700,
    video: false,
    vote_count: 3202,
    vote_average: 7.2,
    title: 'Bad Boys for Life',
    release_date: '2020-01-15',
    original_language: 'en',
    original_title: 'Bad Boys for Life',
    genre_ids: [53, 28, 80],
    backdrop_path: '/upUy2QhMZEmtypPW3PdieKLAHxh.jpg',
    adult: false,
    overview:
      "Marcus Burnett est maintenant inspecteur de police. Mike Lowery est, quant à lui, en pleine crise de la quarantaine. Ils s'unissent à nouveau lorsqu'un mercenaire albanais, dont ils ont tué le frère, leur promet une importante prime.",
    poster_path: '/xbo43M8kdKK5Ku2oaKDMO9PNyo5.jpg'
  },
  {
    popularity: 263.064,
    vote_count: 789,
    video: false,
    poster_path: '/5a1WZ8qgcxw9gLJD7JQVfHeY0NN.jpg',
    id: 443791,
    adult: false,
    backdrop_path: '/fYPiQewg7ogbzro2XcCTACSB2KC.jpg',
    original_language: 'en',
    original_title: 'Underwater',
    genre_ids: [28, 27, 878, 53],
    title: 'Underwater',
    vote_average: 6.5,
    overview:
      "Une équipe scientifique sous-marine fait face à un tremblement de terre. Sous l'eau, ils vont devoir essayer de survivre.",
    release_date: '2020-01-08'
  }
];

class MatchRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: initialList,
      user1List: [],
      user2List: [],
      index: 0,
      finishedSession: false,
      currentSession: 'user1'
    };
  }

  handleValidate = () => {
    const user1List = this.state.user1List.slice();
    user1List.push(this.state.list[this.state.index]);
    this.setState({
      user1List,
      index: this.state.index + 1,
      finishedSession: this.state.index === this.state.list.length - 1
    });
  };

  handleReject = () => {
    this.setState({
      index: this.state.index + 1,
      finishedSession: this.state.index === this.state.list.length - 1
    });
  };

  handleSession = () => {
    const currentSession = 'user2';
    this.setState({ currentSession });
  };

  handleReturn = () => {
    const user1List = this.state.user1List.slice();
    this.setState({ index: this.state.index - 1 });
    if (user1List.includes(this.state.list[this.state.index - 1])) {
      console.log('film existant dans la liste 1');
      user1List.pop();
      this.setState({ user1List });
    }
  };

  render () {
    const { user1, user2 } = this.props;
    return (
      <div>
        <HeaderSmall />
        <Link to='/result'>
          <h2>Result</h2>
        </Link>
        {this.state.currentSession === 'user1' ? (
          <User1List
            user1={user1}
            {...this.state}
            onHandleSession={this.handleSession}
            onHandleReject={this.handleReject}
            onHandleValidate={this.handleValidate}
            onHandleReturn={this.handleReturn}
            user2={user2}
          />
        ) : (
          <User2List user2={user2} />
        )}
      </div>
    );
  }
}

export default MatchRoom;
