import React from 'react';
import {Switch,BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/home'
import Post from './pages/post'
import CreatePost from './pages/post'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/post/create' component={CreatePost}/>
        <Route path='/post/:id' component={Post}/>
        
      </Switch>
    </Router>

  );
}

export default App;
