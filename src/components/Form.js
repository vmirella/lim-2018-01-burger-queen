import React from 'react';

const Form = (props) => {

  return (
    <div className = "row">
      <div className = "col s10">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>              
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {props.arrayOrders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.name}</td>
                  <td>S/. {order.price}</td>
                  <td>{order.quantity}</td>                  
                  <td>S/. {order.subtotal}</td>
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