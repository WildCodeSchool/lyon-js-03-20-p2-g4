import React from 'react';
import MovieLists from '../components/MovieLists';
import { Link } from 'react-router-dom';
import Button from '../components/Button.js';
import HeaderSmall from '../components/HeaderSmall';
import '../styles/Result.css';

class Result extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='result'>
        <div className='centered'>
          <HeaderSmall />
          <h2 className='subtitle'>Oh non, vous n’avez aucun match !</h2>
          <Link to='/matchroom'>
            <Button txt="Continuer d'explorer la liste" />
          </Link>
        </div>
        <MovieLists />
      </div>
    );
  }
}

export default Result;
