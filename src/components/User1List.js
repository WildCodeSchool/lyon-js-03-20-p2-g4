import React from 'react';
import FilmCard from './FilmCard';
import '../styles/UserList.css';
import Button from './Button';
import Validate from '../images/validate.svg';
import Reject from '../images/reject.svg';
import Return from '../images/return.png';
import Drawer from './Drawer';
import SidebarInfoDesktop from '../components/SidebarInfoDesktop';

class User1List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      getInfo: false,
      renderedDrawer: false,
      filmId: null
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
          <h2 className='subtitle'>{`À vous ${this.props.user1}`}</h2>
        </div>
        {this.props.finishedSession ? (
          <div className='centered'>
            <Button
              content={`Lancer session ${this.props.user2}`}
              onClick={this.props.onHandleSession}
              className='button'
            />
          </div>
        ) : (
          <>
            <h2 className='user-session'>Utilisateur : {this.props.user1}</h2>

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
        <SidebarInfoDesktop matchList={this.state.matchList} getInfo={this.state.getInfo} filmId={this.props.apiList[this.props.index].id} />
      </div>
    );
  }
}

export default User1List;
