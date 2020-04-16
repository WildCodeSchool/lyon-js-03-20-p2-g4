import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MatchRoom from './pages/MatchRoom';
import Result from './pages/Result';

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/matchroom' component={MatchRoom} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
