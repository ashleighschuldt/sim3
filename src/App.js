import React, { Component } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path={`/dashboard`} component={Dashboard}/>
          <Route path={`/post:postid`} component={Post}/>
          <Route path={`/new`} component={Form}/>
          <Route  path={`/`} component={Auth}/>
        </Switch>
      </div>
    );
  }
}

export default App;
