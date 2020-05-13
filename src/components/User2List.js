import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg';
import { Link } from 'react-router-dom';
import Return from '../images/return.png';
import Drawer from './Drawer';

class User2List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      getInfo: false,
      renderedDrawer: false,
      filmId: null,
      currentPage: this.props.currentPage
    };
  }

  closeDrawer = () => {
    this.setState({ getInfo: false });
    document.getElementById('drawer-movie-all-info-container').scrollTo(0, 0);
    document.body.classList.remove('js-no-scroll');
  };

  handleGetDrawer = (e) => {
    this.setState({ filmId: this.props.apiList[this.props.index].id, getInfo: true, renderedDrawer: true });
    document.body.classList.add('js-no-scroll');
  }

  render () {
    return (
      <div className='user-list-container'>
        <div className='pop-up-user-session'>
          <h2 className='subtitle'>{`À vous ${this.props.user2}`}</h2>
        </div>
        {this.props.finishedSession ? (
          <div className='centered'>
            <Link to='/result' {...this.state}>
              <Button
                content='Voir les résultats'
                className='button'
                onClick={() => {
                  this.props.getMatchList(this.props.matchList);
                }
                }
              />
            </Link>
          </div>
        ) : (
          <>
            <h2 className='user-session'>Utilisateur : {this.props.user2}</h2>
            <FilmCard index={this.props.index} apiList={this.props.apiList} />
            <h3 className='session-film-name'>{this.props.apiList[this.props.index].title}</h3>
            <div className='session-button-container'>
              <Button
                content={<img src={Reject} alt='reject button' />}
                className='session-button reject'
                onClick={this.props.onHandleReject}
              />
              <Button
                content={<img src={Return} alt='return button' />}
                className={(this.props.index > 0) ? ('session-button return') : ('session-button hidden-return')}
                onClick={this.props.onHandleReturn}
              />
              <Button
                content='i'
                className='session-button more-info'
                onClick={this.handleGetDrawer}
              />
              <Button
                content={<img src={Validate} alt='validate button' />}
                className='session-button validate'
                onClick={this.props.onHandleValidate}
              />
            </div>
          </>
        )}
        {this.state.renderedDrawer && <Drawer matchList={this.state.matchList} getInfo={this.state.getInfo} handleCloseDrawer={this.closeDrawer} filmId={this.state.filmId} />}
      </div>
    );
  }
}

export default User2List;
