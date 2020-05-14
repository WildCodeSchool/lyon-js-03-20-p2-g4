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
      apiList: [],
      user1List: [],
      user2List: [],
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

  getAllLists = (apiList, matchList, user1List, user2List) => {
    this.setState({ apiList, matchList, user1List, user2List });
  };

  getCurrentList = (newList) => {
    this.setState({ currentList: newList });
  };

  getCurrentPage = (newPage) => {
    this.setState({ currentPage: newPage });
  }

  resetAppState = () => {
    this.setState({
      user1: 'Tic',
      user2: 'Tac',
      matchList: [],
      apiList: [],
      user1List: [],
      user2List: [],
      currentList: {},
      currentPage: {}
  })
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
                  getAllLists={this.getAllLists}
                  getCurrentPage={this.getCurrentPage}
                  resetAppState={this.resetAppState}
                />
              )}
            />
            <Route exact path='/result'>
              <Result
                {...this.state}
                getCurrentList={this.getCurrentList}
                getCurrentPage={this.getCurrentPage}
                resetAppState={this.resetAppState}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
