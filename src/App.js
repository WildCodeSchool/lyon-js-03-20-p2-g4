import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import MatchRoom from './pages/MatchRoom';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <div className="App">
        
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/matchroom" component={MatchRoom} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;
