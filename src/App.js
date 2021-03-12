import './App.css';
import React from 'react'
import FirstNavbar from './components/Layout/Nav1';
import SecondNavbar from './components/Layout/Nav2';
import ViewPost from './components/post/ViewPost';
import Home from './components/views/Home';

//Router to allow route navigation
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <FirstNavbar />
        <SecondNavbar />
      </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:slug" component={ViewPost} />
            </Switch>
      </Router>
  );
}

export default App;
