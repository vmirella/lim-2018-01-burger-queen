import React, { Component } from 'react';
import Form from '../components/Form';
import '../App.css';
import Button from '../components/Button';
import {Tabs, Tab} from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textButton: '',
      color: '',
      orders: [],
      total: 0
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
              <Tabs>
                <Tab title="Desayuno" className="waves-effect waves-light btn" active>
                  <div>
                    <div className="divider"></div>
                    <h5>Cafés</h5>
                    <Button textButton = "Café americano S/. 5" color = "light-blue darken-3"></Button>
                    <Button textButton = "Café con leche S/. 7" color = "light-blue darken-3"></Button>
                    <div className="divider"></div>
                    <h5>Jugos</h5>
                    <Button textButton = "Jugo natural S/. 7" color = "light-blue darken-3"></Button>
                    <div className="divider"></div>
                    <h5>Sandwiches</h5>
                    <Button textButton = "Sandwich de jamón y queso S/. 7" color = "light-blue darken-3"></Button>
                  </div>
                </Tab>
                <Tab title="Almuerzo / Cena">
                  <div>
                    <div className="divider"></div>
                    <h5>Hamburguesas</h5>
                    <Button textButton = "Hamburguesa carne" color = "light-blue darken-3"></Button>
                    <Button textButton = "Hamburguesa pollo" color = "light-blue darken-3"></Button>
                    <Button textButton = "Hamburguesa vegana" color = "light-blue darken-3"></Button>
                    <div className="divider"></div>
                    <h5>Acompañamientos</h5>
                    <Button textButton = "Papas fritas S/. 5" color = "light-blue darken-3"></Button>
                    <Button textButton = "Onions rings S/. 5" color = "light-blue darken-3"></Button>
                    <div className="divider"></div>
                    <h5>Bebidas</h5>
                    <Button textButton = "Agua 500 ml. S/. 5" color = "light-blue darken-3"></Button>
                    <Button textButton = "Gaseosa 500 ml. S/. 5" color = "light-blue darken-3"></Button>
                    <Button textButton = "Agua 750 ml. S/. 8" color = "light-blue darken-3"></Button>
                    <Button textButton = "Gaseosa 750 ml. S/. 10" color = "light-blue darken-3"></Button>
                  </div>
                </Tab>
              </Tabs>
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
