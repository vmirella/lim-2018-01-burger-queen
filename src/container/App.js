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
    this.addProduct = this.addProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  addProduct(name, quantity, price) {
    const orders = this.state.orders;
    let subtotal = quantity * price;

    const order = {
      name: name,
      quantity: quantity,
      price: price,
      subtotal: subtotal
    }

    orders.push(order);

    this.setState({orders});
    this.calculateTotal();
  }

  calculateTotal() {
    const orders = this.state.orders;
    let total = 0;
    orders.map((order) => {
      return total += order.subtotal;
    });
    this.setState({total: total}); 
  } 

  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h2>Burger Queen <i className ="fas fa-chess-queen App-logo"></i></h2>
          <div className="div-client">
            <label>Nombre del cliente:</label>
            <input></input>
          </div>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "col m6">
              <Tabs>
                <Tab title="Desayuno" className="waves-effect waves-light" active>
                  <div>
                    <div className="divider"></div>
                    <h5>Cafés</h5>
                    <Button textButton="Café americano S/. 5" color="light-blue darken-3" name={'Café americano'} price={5} onAddProduct={this.addProduct}></Button>
                    <Button textButton="Café con leche S/. 7" color="light-blue darken-3" name={'Café con leche'} price={7} onAddProduct={this.addProduct}></Button>
                    <div className="divider"></div>
                    <h5>Jugos</h5>
                    <Button textButton = "Jugo natural S/. 7" color = "light-blue darken-3" name={'Jugo natural'} price={7} onAddProduct={this.addProduct}></Button>
                    <div className="divider"></div>
                    <h5>Sandwiches</h5>
                    <Button textButton = "Sandwich de jamón y queso S/. 7" color = "light-blue darken-3" name={'Sandwich de jamón y queso'} price={7} onAddProduct={this.addProduct}></Button>
                  </div>
                </Tab>
                <Tab title="Almuerzo / Cena">
                  <div>
                    <div className="divider"></div>
                    <h5>Hamburguesas</h5>
                    <div col s6>
                    <Button textButton = "Hamburguesa carne" color = "light-blue darken-3" name={'Hamburguesa carne'} price={10} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Hamburguesa pollo" color = "light-blue darken-3" name={'Hamburguesa pollo'} price={10} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Hamburguesa vegetariana" color = "light-blue darken-3" name={'Hamburguesa vegetariana'} price={10} onAddProduct={this.addProduct}></Button>
                    </div>
                    <div className="divider"></div>
                    <div col s6>
                      <p>
                        <label>
                          <input className="with-gap" name="group3" type="radio" checked />
                          <span>Simple</span>
                        </label>
                        <label>
                          <input className="with-gap" name="group3" type="radio" />
                          <span>Doble</span>
                        </label>
                      </p>
                    </div>
                    <div className="divider"></div>
                    <h5>Acompañamientos</h5>
                    <Button textButton = "Papas fritas S/. 5" color = "light-blue darken-3" name={'Papas fritas'} price={5} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Onions rings S/. 5" color = "light-blue darken-3" name={'Onions rings'} price={5} onAddProduct={this.addProduct}></Button>
                    <div className="divider"></div>
                    <h5>Bebidas</h5>
                    <Button textButton = "Agua 500 ml. S/. 5" color = "light-blue darken-3" name={'Agua 500 ml.'} price={5} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Gaseosa 500 ml. S/. 5" color = "light-blue darken-3" name={'Gaseosa 500 ml.'} price={5} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Agua 750 ml. S/. 8" color = "light-blue darken-3" name={'Agua 750 ml.'} price={8} onAddProduct={this.addProduct}></Button>
                    <Button textButton = "Gaseosa 750 ml. S/. 10" color = "light-blue darken-3" name={'Gaseosa 750 ml.'} price={10} onAddProduct={this.addProduct}></Button>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className = "col m6">
              <Form arrayOrders={this.state.orders} total={this.state.total}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
