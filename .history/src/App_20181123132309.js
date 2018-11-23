import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home, Login} from './pages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/Login/:name" component={Login}/>
          <Route path="/Login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
