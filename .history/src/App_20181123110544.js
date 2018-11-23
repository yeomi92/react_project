import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>login</div>
        <div>
          <span>ID</span>
          <input></input>
          <span>PW</span>
          <input></input>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </div>
    );
  }
}

export default App;
