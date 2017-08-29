import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      deadline: 'May, 4, 2018',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Avengers: Infinity War</div>
        <div className="App-date">{this.state.deadline}</div>
        <Clock deadline={ this.state.deadline }/>
      </div>
    );
  }
}

export default App;
