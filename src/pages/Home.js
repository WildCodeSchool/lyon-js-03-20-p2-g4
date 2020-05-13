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
          <>
            <h1 className='big-screens'>Movie Match vous aide à <span className='green-title'>trouver un film à regarder</span> en quelques minutes</h1>
            <div className='centered'>
              <UsersInputs {...this.props} />
              <Button content='Valider' onClick={this.handleHide} className='button' />
            </div>
          </>
        ) : (
          <>
            <h2 className='centered-title subtitle'>Choisissez une liste de films</h2>
            <div className='list-container-desktop'>
              <div className='left-column'>
                <TrendList />
                <MovieLists type='genres' {...this.props} />
              </div>
              <div className='right-column'>
                <MovieLists type='people' {...this.props} />
                <MovieLists type='decades' {...this.props} />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Home;
