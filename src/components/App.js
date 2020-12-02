import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Header, DetailMovie } from "./";
import { MoviesContext } from "../context";

function App() {
  const [movie, setMovie] = React.useState(undefined);
  return (
    <MoviesContext.Provider value={{ movie, setMovie }}>
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
    </MoviesContext.Provider>
  );
}

export default App;
