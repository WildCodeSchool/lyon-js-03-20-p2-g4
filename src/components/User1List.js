import React from 'react';
import FilmCard from './FilmCard';

class User1List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentFilmId: null
    };
  }

  render () {
    return (
      <div>
        <h2></h2>
        <FilmCard />
      </div>

    );
  }
}

export default User1List;
