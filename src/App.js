import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MatchRoom from './pages/MatchRoom';
import Result from './pages/Result';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user1: 'Tic',
      user2: 'Tac',
      matchList: [],
      currentList: {},
      currentPage: {}
    };
  }

  handleChange1 = (event) => {
    const user = event.target.value;
    this.setState({ user1: user });
  };

  handleChange2 = (event) => {
    const user = event.target.value;
    this.setState({ user2: user });
  };

  getMatchList = (newMatchList) => {
    this.setState({ matchList: newMatchList });
  };

  getCurrentList = (newList) => {
    this.setState({ currentList: newList });
  };

  getCurrentPage = (newPage) => {
    this.setState({ currentPage: newPage });
  }

  render () {
    const { user1, user2 } = this.state;
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Home
                user1={user1}
                user2={user2}
                onChange1={this.handleChange1}
                onChange2={this.handleChange2}
                getCurrentList={this.getCurrentList}
                getCurrentPage={this.getCurrentPage}
              />
            </Route>
            <Route
              exact
              path='/matchroom/:type/:id'
              render={(routeProps) => (
                <MatchRoom
                  {...this.state}
                  {...routeProps}
                  getMatchList={this.getMatchList}
                  getCurrentPage={this.getCurrentPage}
                />
              )}
            />
            <Route exact path='/result'>
              <Result
                {...this.state}
                getCurrentList={this.getCurrentList}
                getCurrentPage={this.getCurrentPage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
