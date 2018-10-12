import React from 'react';


const Button = (props) => {

  return (
    <button className={`waves-effect waves-light btn-large ${props.color} food-type`}>{props.textButton}</button>
  )
}

export default Button;