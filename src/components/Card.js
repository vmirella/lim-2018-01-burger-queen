import React from 'react';

const Button = (props) => {

  return (
    <div className="col s6">
      <div className="card" onClick={() => props.onAddProduct(props.name, 1, props.price)}>
        <div className="card-content">
          <p>{props.name}</p>
          <p>S/. {props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Button;