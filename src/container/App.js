import React, { Component } from 'react';
import Form from '../components/Form';
import '../App.css';
import Card from '../components/Card';
import {Tabs, Tab, Collapsible, CollapsibleItem, Modal, Button} from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      total: 0,
      client: ''
    }
    this.addProduct = this.addProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
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

  updateQuantity(index, quantity) {
    const orders = this.state.orders;
    //creamos una variable que guarde la cantidad actual del producto
    let currentQuantity = orders[index].quantity;
    //acumular la cantidad actual con la que envia el boton -1 o 1
    currentQuantity += quantity;
    //la cantidad no debe ser menor a 1
    if(currentQuantity >= 1) {
      //actualizamos la cantidad
      orders[index].quantity = currentQuantity;
      //actualizar el subtotal con la nueva cantidad
      orders[index].subtotal = orders[index].quantity * orders[index].price;
      //actualizar el state orders
      this.setState({orders});
      //recalcular el total
      this.calculateTotal();
    }
  }

  removeProduct(index) {
    const orders = this.state.orders;
    //eliminamos el elemento del index enviado
    orders.splice(index, 1);

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

  handleChange(e) {
    this.setState({ client: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className = "App-header row">
          <div className="col m6">
            <h2>Burger Queen <i className ="fas fa-chess-queen App-logo"></i></h2>
          </div>
          <div className="col m6 div-client">
            <label>Nombre del cliente:</label>
            <input onChange={this.handleChange.bind(this)} value={this.state.client}></input>
          </div>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "col m5">
              <Tabs>
                <Tab title="Desayuno" className="waves-effect waves-light" active>
                <Collapsible>
                  <CollapsibleItem header='Cafés'>
                    <div className="row">
                      <Card name={'Café americano'} price={5} onAddProduct={this.addProduct}>
                      </Card>
                      <Card name={'Café con leche'} price={7} onAddProduct={this.addProduct}>
                      </Card>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem header='Jugos'>
                    <div className="row">
                      <Card name={'Jugo natural'} price={7} onAddProduct={this.addProduct}></Card>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem header='Sandwiches'>
                    <div className="row">
                      <Card name={'Sandwich de jamón y queso'} price={7} onAddProduct={this.addProduct}></Card>
                    </div>
                  </CollapsibleItem>
                </Collapsible>
                </Tab>
                <Tab title="Almuerzo / Cena">
                  <Collapsible>
                    <CollapsibleItem header="Hamburguesas">
                      <div className="row">
                        <Card name={'Hamburguesa carne simple'} price={10} onAddProduct={this.addProduct}></Card>
                        <Card name={'Hamburguesa carne doble'} price={15} onAddProduct={this.addProduct}></Card>
                        <Card name={'Hamburguesa pollo simple'} price={10} onAddProduct={this.addProduct}></Card>
                        <Card name={'Hamburguesa pollo doble'} price={15} onAddProduct={this.addProduct}></Card>
                        <Card name={'Hamburguesa vegetariana simple'} price={10} onAddProduct={this.addProduct}></Card>                  
                        <Card name={'Hamburguesa vegetariana doble'} price={15} onAddProduct={this.addProduct}></Card>
                      </div> 
                    </CollapsibleItem>
                    <CollapsibleItem header="Acompañamientos">
                      <div className="row">
                        <Card name={'Papas fritas'} price={5} onAddProduct={this.addProduct}></Card>
                        <Card name={'Onions rings'} price={5} onAddProduct={this.addProduct}></Card>
                      </div>
                    </CollapsibleItem>
                    <CollapsibleItem header="Bebidas">
                      <div className="row">
                        <Card name={'Agua 500 ml.'} price={5} onAddProduct={this.addProduct}></Card>
                        <Card name={'Gaseosa 500 ml.'} price={5} onAddProduct={this.addProduct}></Card>
                        <Card name={'Agua 750 ml.'} price={8} onAddProduct={this.addProduct}></Card>
                        <Card name={'Gaseosa 750 ml.'} price={10} onAddProduct={this.addProduct}></Card>
                      </div>
                    </CollapsibleItem>
                  </Collapsible>                  
                </Tab>
              </Tabs>
            </div>
            <div className = "col m7">
              <Form arrayOrders={this.state.orders} total={this.state.total} updateQuantity={this.updateQuantity} removeProduct={this.removeProduct}/>
              <Modal
                header={`El pedido ha sido enviado, para el cliente ${this.state.client}.`}
                trigger={<Button>Enviar pedido</Button>}>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
