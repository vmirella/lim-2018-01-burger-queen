import React from 'react';

const Button = (props) => {

  return (
    <button className={`waves-effect waves-light btn-small ${props.color} food-type`} onClick = {() => props.onAddProduct(props.name, 1, props.price)}>{props.textButton}</button>
  )
}

export default Button;