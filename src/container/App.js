 import React, { Component } from 'react';
import '../App.css';
import Button from '../components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textButton: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h2>Burger Queen <i className ="fas fa-chess-queen App-logo"></i></h2>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "col m6">
              <Button textButton = "Desayuno"></Button>
              <Button textButton = "Almuerzo / Cena"></Button>
            </div>
            <div className = "col m6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
