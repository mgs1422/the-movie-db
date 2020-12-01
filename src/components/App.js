import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Header, DetailMovie } from './';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Header />
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <DetailMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
