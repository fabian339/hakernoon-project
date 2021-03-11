// import logo from './logo.svg';
import './App.css';
import React from 'react'
import FirstNavbar from './components/Layout/Nav1';
import SecondNavbar from './components/Layout/Nav2';
import Post from './components/post/Post';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    // </div>
    <Router>
      <div>
        <FirstNavbar />
        <SecondNavbar />
      </div>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/:slug" component={Post} />
            </Switch>
      </Router>
  );
}

export default App;
