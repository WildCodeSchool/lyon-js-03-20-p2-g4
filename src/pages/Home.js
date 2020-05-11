import React from 'react';
import MovieLists from '../components/MovieLists';
import UsersInputs from '../components/UsersInputs';
import HeaderHome from '../components/HeaderHome';
import Button from '../components/Button';
import '../styles/Home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      namesHidden: false
    };
  }

  handleHide = () => {
    const namesHidden = !this.state.namesHidden;
    this.setState({ namesHidden });
  };

  render () {
    const { namesHidden } = this.state;
    return (
      <div className='home'>
        <HeaderHome />
        {!namesHidden ? (
          <div className='centered'>
            <UsersInputs {...this.props} />
            <Button content='Valider' onClick={this.handleHide} className='button' />
          </div>
        ) : (
          <>
            <h2 className='centered-title'>Choisissez une liste de films</h2>
            <MovieLists type='genres' />
            <MovieLists type='people' />
          </>
        )}
      </div>
    );
  }
}

export default Home;
