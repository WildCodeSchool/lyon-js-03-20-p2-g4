import React from 'react';
import MovieLists from '../components/MovieLists';
import TrendList from '../components/TrendList';
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
            <h2 className='centered-title subtitle'>Choisissez une liste de films</h2>
            <TrendList />
            <MovieLists type='genres' {...this.props} />
            <MovieLists type='people' {...this.props} />
            <MovieLists type='decades' {...this.props} />
          </>
        )}
      </div>
    );
  }
}

export default Home;
