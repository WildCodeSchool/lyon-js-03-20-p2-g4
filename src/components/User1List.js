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
        <FilmCard />
      </div>

    )
  }
}

export default User1List;
