import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg'

const initialList =  [
  {
    "popularity": 220.799,
    "vote_count": 2868,
    "video": false,
    "poster_path": "/qi6qwClvTfZJiI5GhsKbtkqg28W.jpg",
    "id": 454626,
    "adult": false,
    "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
    "original_language": "en",
    "original_title": "Sonic the Hedgehog",
    "genre_ids": [
      28,
      35,
      878,
      10751
    ],
    "title": "Sonic le film",
    "vote_average": 7.5,
    "overview": "L'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison. Sonic et son nouveau meilleur ami Tom font équipe pour sauver la planète du diabolique Dr. Robotnik, bien déterminé à régner sur le monde entier.",
    "release_date": "2020-02-12"
  },
  {
    "popularity": 199.496,
    "vote_count": 147,
    "video": false,
    "poster_path": "/iBvo3qOPcmhlqAaJcXcQHtx2qLk.jpg",
    "id": 664767,
    "adult": false,
    "backdrop_path": "/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg",
    "original_language": "en",
    "original_title": "Mortal Kombat Legends: Scorpions Revenge",
    "genre_ids": [
      28,
      12,
      16,
      14
    ],
    "title": "Mortal Kombat Legends: Scorpion's Revenge",
    "vote_average": 8.5,
    "overview": "Lord Raiden, protecteur d'Earthrealm, doit rassembler les plus grands combattants de son royaume pour le défendre du démoniaque Shang Tsung dans une bataille ultime.",
    "release_date": "2020-04-12"
  },
  {
    "popularity": 204.235,
    "id": 38700,
    "video": false,
    "vote_count": 3202,
    "vote_average": 7.2,
    "title": "Bad Boys for Life",
    "release_date": "2020-01-15",
    "original_language": "en",
    "original_title": "Bad Boys for Life",
    "genre_ids": [
      53,
      28,
      80
    ],
    "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
    "adult": false,
    "overview": "Marcus Burnett est maintenant inspecteur de police. Mike Lowery est, quant à lui, en pleine crise de la quarantaine. Ils s'unissent à nouveau lorsqu'un mercenaire albanais, dont ils ont tué le frère, leur promet une importante prime.",
    "poster_path": "/xbo43M8kdKK5Ku2oaKDMO9PNyo5.jpg"
  },
  {
    "popularity": 263.064,
    "vote_count": 789,
    "video": false,
    "poster_path": "/5a1WZ8qgcxw9gLJD7JQVfHeY0NN.jpg",
    "id": 443791,
    "adult": false,
    "backdrop_path": "/fYPiQewg7ogbzro2XcCTACSB2KC.jpg",
    "original_language": "en",
    "original_title": "Underwater",
    "genre_ids": [
      28,
      27,
      878,
      53
    ],
    "title": "Underwater",
    "vote_average": 6.5,
    "overview": "Une équipe scientifique sous-marine fait face à un tremblement de terre. Sous l'eau, ils vont devoir essayer de survivre.",
    "release_date": "2020-01-08"
  }
]

class MatchRoom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: initialList,
      user1List: [],
      user2List: [],
      index: 0,
      finishedSession: false
    };
  }

  handleValidate = () => {

  }

  handleReject = () => {
    if(this.state.index < initialList.length - 1 ) {
      this.setState({ index: (this.state.index + 1) })
    } else {
      return this.setState({finishedSession: true})
    }
    
  }

  
  render () {
    console.log(this.state.list)
    return (
      <div>
        <h2>Match Room page</h2>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/result'>
          <h2>Result</h2>
          
        </Link>
        <div>{this.state.finishedSession ? <p>Vous avez terminé votre session</p> : this.state.list[this.state.index].title}
        </div>
        <div className="session-button-container">
          <Button content={<img src={Reject} alt="reject button"/>} className="session-button reject" onClick={this.handleReject}/>
          <Button content={<img src={Validate} alt="validate button"/>} className="session-button validate"/>
        </div>
      </div>
    );
  }
}

export default MatchRoom;
