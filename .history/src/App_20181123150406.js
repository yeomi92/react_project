import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home, Login, Dashboard} from './pages'
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
      <Menu></Menu>
      <div>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/Login/:name" component={Login}/>
          <Route path="/Login" component={Login}/>
        </Switch>
        <Route path="/Dashboard" component={Dashboard}/>
      </div>
      </div>
    );
  }
}

export default App;
