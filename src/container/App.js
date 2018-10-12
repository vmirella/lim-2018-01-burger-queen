 import React, { Component } from 'react';
 import Form from '../components/Form';
import '../App.css';
import Button from '../components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textButton: '',
      color: ''
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
              <Button textButton = "Desayuno" color = "amber darken-1"></Button>
              <Button textButton = "Almuerzo / Cena" color = "amber darken-1"></Button>
              <div className="div-breakfast">
                <Button textButton = "Café americano S/. 5" color = "light-blue darken-3"></Button>
                <Button textButton = "Café con leche S/. 7" color = "light-blue darken-3"></Button>
                <Button textButton = "Sandwich de jamón y queso S/. 7" color = "light-blue darken-3"></Button>
                <Button textButton = "Jugo natural S/. 7" color = "light-blue darken-3"></Button>
              </div>
              <div className="div-lunch-dinner">
                <divider></divider>
                <h5>Hamburguesas</h5>
                <Button textButton = "Hamburguesa simple" color = "light-blue darken-3"></Button>
                <Button textButton = "Hamburguesa doble" color = "light-blue darken-3"></Button>
                <divider></divider>
                <h5>Acompañamientos</h5>
                <Button textButton = "Papas fritas S/. 5" color = "light-blue darken-3"></Button>
                <Button textButton = "Onions rings S/. 5" color = "light-blue darken-3"></Button>
                <h5>Bebidas</h5>
                <Button textButton = "Agua S/. 5" color = "light-blue darken-3"></Button>
                <Button textButton = "Gaseosa S/. 5" color = "light-blue darken-3"></Button>
              </div>
              <div>

              </div>
            </div>
            <div className = "col m6">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
