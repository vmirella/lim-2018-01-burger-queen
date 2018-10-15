import React from 'react';


const Form = (props) => {

  return (
    <div className = "row">
      <div className = "col s10">
        <div>
          <ul className="collection with-header">
            <li className="collection-header"><h4>Pedido</h4></li>
            <li className="collection-item">Producto S/. 12</li>
            <li className="collection-item">Producto S/. 12</li>
            <li className="collection-item">Producto S/. 12</li>
            <li className="collection-item">Producto S/. 12</li>
          </ul>
        </div>
        <h4>Total S/. 200.50</h4>
      </div>
    </div>
  )
}

export default Form;