import React from 'react';

const Form = (props) => {

  return (
    <div className = "row">
      <div className = "col s12">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>              
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.arrayOrders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.name}</td>
                  <td>S/. {order.price}</td>
                  <td>
                    <button className="btn-small" onClick={() => props.updateQuantity(i, -1)}><i className="material-icons">remove</i></button>
                    &nbsp;&nbsp;
                    {order.quantity}
                    &nbsp;&nbsp;
                    <button className="btn-small" onClick={() => props.updateQuantity(i, 1)}><i className="material-icons">add</i></button></td>                  
                  <td>S/. {order.subtotal}</td>
                  <td><button className="btn red darken-1" onClick={() => props.removeProduct(i)}><i className="material-icons">close</i></button></td>
                </tr>
              )
            })}            
          </tbody>
        </table>

        <h4>Total S/. {props.total}</h4>
      </div>
    </div>
  )
}

export default Form;