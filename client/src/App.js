import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import CSS
import './App.css'

//import pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Game from './pages/Game'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>
        <Route exact path='/SignUp'>
          <SignUp />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
