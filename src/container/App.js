import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import '../App.css';
import Card from '../components/Card';
import {Tabs, Tab, Collapsible, CollapsibleItem, Button} from 'react-materialize';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      total: 0,
      client: '',
      tabBreakfast: true,
      tabLunch: false,
      collapseCoffes: '',
      collapseJuices: '',
      collapseSandwiches: '',
      collapseBurgues: '',
      collapseAccompaniments: '',
      collapseDrinks: '',
      coffees: [],
      juices: [],
      sandwiches: [],
      burguers: [],
      accompaniments: [],
      drinks: []
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
      promotion: {
        egg: false,
        cheese: false
      },
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

  handleTabChange = (event) => {
    let lastChar = event.slice(-1);
    if(lastChar === '0'){
      this.setState({tabBreakfast: true});
      this.setState({tabLunch: false});
    }
    else {
      this.setState({tabBreakfast: false});
      this.setState({tabLunch: true});
    }
  }

  handleCollapse = (item) => {
    this.setState({ collapseCoffes: '' });
    this.setState({ collapseJuices: '' });
    this.setState({ collapseSandwiches: '' });
    this.setState({ collapseBurgues: '' });
    this.setState({ collapseAccompaniments: '' });
    this.setState({ collapseDrinks: '' });

    switch(item) {
      case 'collapseCoffes': 
        this.setState({ collapseCoffes: 'active' });
        break;
      case 'collapseJuices': 
        this.setState({ collapseJuices: 'active' });
        break;
      case 'collapseSandwiches': 
        this.setState({ collapseSandwiches: 'active' });
        break;
      case 'collapseBurgues': 
        this.setState({ collapseBurgues: 'active' });
        break;
      case 'collapseAccompaniments': 
        this.setState({ collapseAccompaniments: 'active' });
        break;
      case 'collapseDrinks': 
        this.setState({ collapseDrinks: 'active' });
        break;
    }
    
  }

  sendOrder = () => {
    const orders = this.state.orders;
    const db = firebase.firestore();

    let msg = ReactDOM.findDOMNode(this.refs['msg']);
    let error = ReactDOM.findDOMNode(this.refs['error']);

    if(this.state.client === ''){
      console.log('cliente vacio');
      
      error.classList.add('show');
      setTimeout(function(){ 
        error.classList.remove('show'); 
      }, 3000);
      return;
    }

    const objOrder = {
      client: this.state.client,
      order: orders
    }

    db.collection('orders').add(objOrder)
    .then(function() {
        console.log('orden enviada');
        
        msg.classList.add('show');
        setTimeout(function(){ 
          msg.classList.remove('show'); 
        }, 3000);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  componentDidMount() {
    const db = firebase.firestore();
    
    const coffees = [];
    db.collection('productos').doc('desayunos').collection('cafes')
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        coffees.push(doc.data());
      });
      this.setState({coffees: coffees});
    });

    const juices = [];
    db.collection('productos').doc('desayunos').collection('jugos')
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        juices.push(doc.data());
      });
      this.setState({juices: juices});
    });

    const sandwiches = [];
    db.collection('productos').doc('desayunos').collection('sandwiches')
    .onSnapshot((snapshot) => {      
      snapshot.forEach((doc) => {
        sandwiches.push(doc.data());
      });
      this.setState({sandwiches: sandwiches});
    });    

    const burguers = [];
    db.collection('productos').doc('almuerzos').collection('hamburguesas')
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        burguers.push(doc.data());
      });
      this.setState({burguers: burguers});
    });

    const accompaniments = [];
    db.collection('productos').doc('almuerzos').collection('acompañamientos')
    .onSnapshot((snapshot) => {      
      snapshot.forEach((doc) => {
        accompaniments.push(doc.data());
      });
      this.setState({accompaniments: accompaniments});
    });

    const drinks = [];
    db.collection('productos').doc('almuerzos').collection('bebidas')
    .onSnapshot((snapshot) => {      
      snapshot.forEach((doc) => {
        drinks.push(doc.data());
      });
      this.setState({drinks: drinks});
    });
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
              <Tabs onChange={this.handleTabChange}>
                <Tab title="Desayuno" className="waves-effect waves-light" active={this.state.tabBreakfast}>
                <Collapsible>
                  <CollapsibleItem header="Cafés" className={this.state.collapseCoffes} onClick={() => this.handleCollapse('collapseCoffes')}>
                    <div className="row">
                      {this.state.coffees.map((coffee, i) => {
                        return(
                          <Card name={coffee.name} price={coffee.price} key={i} onAddProduct={this.addProduct}></Card>
                        )
                      })}
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem header="Jugos" className={this.state.collapseJuices} onClick={() => this.handleCollapse('collapseJuices')}>
                    <div className="row">
                      {this.state.juices.map((juice, i) => {
                        return(
                          <Card name={juice.name} price={juice.price} key={i} onAddProduct={this.addProduct}></Card>
                        )
                      })}
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem header="Sandwiches" className={this.state.collapseSandwiches} onClick={() => this.handleCollapse('collapseSandwiches')}>
                    <div className="row">
                      {this.state.sandwiches.map((sandwich, i) => {
                        return(
                          <Card name={sandwich.name} price={sandwich.price} key={i} onAddProduct={this.addProduct}></Card>
                        )
                      })}
                    </div>
                  </CollapsibleItem>
                </Collapsible>
                </Tab>
                <Tab title="Almuerzo / Cena" active={this.state.tabLunch}>
                  <Collapsible>
                    <CollapsibleItem header="Hamburguesas" className={this.state.collapseBurgues} onClick={() => this.handleCollapse('collapseBurgues')}>
                      <div className="row">
                        {this.state.burguers.map((burguer, i) => {
                          return(
                            <Card name={burguer.name} price={burguer.price} key={i} onAddProduct={this.addProduct}></Card>
                          )
                        })}                                            
                      </div> 
                    </CollapsibleItem>
                    <CollapsibleItem header="Acompañamientos" className={this.state.collapseAccompaniments} onClick={() => this.handleCollapse('collapseAccompaniments')}>
                      <div className="row">
                        {this.state.accompaniments.map((accompaniment, i) => {
                          return(
                            <Card name={accompaniment.name} price={accompaniment.price} key={i} onAddProduct={this.addProduct}></Card>
                          )
                        })}
                      </div>
                    </CollapsibleItem>
                    <CollapsibleItem header="Bebidas" className={this.state.collapseDrinks} onClick={() => this.handleCollapse('collapseDrinks')}>
                      <div className="row">
                        {this.state.drinks.map((drink, i) => {
                          return(
                            <Card name={drink.name} price={drink.price} key={i} onAddProduct={this.addProduct}></Card>
                          )
                        })}
                      </div>
                    </CollapsibleItem>
                  </Collapsible>                  
                </Tab>
              </Tabs>
            </div>
            <div className = "col m7">
              <Form arrayOrders={this.state.orders} total={this.state.total} updateQuantity={this.updateQuantity} removeProduct={this.removeProduct}/>
              <Button onClick={this.sendOrder}>Enviar pedido</Button>
              <div className="message" ref={'error'}>Debe ingresar el nombre del cliente</div>
              <div className="message" ref={'msg'}>La orden fue enviada</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
