import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import CSS
import './App.css'

//import pages
import Game from './pages/Game'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          {/* Putting the game page in root for testing purposes */}
          <Game/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
