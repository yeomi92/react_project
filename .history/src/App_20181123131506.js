import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Home, Login} from './pages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Login/:name" component={Login}/>
      </div>
    );
  }
}

export default App;
