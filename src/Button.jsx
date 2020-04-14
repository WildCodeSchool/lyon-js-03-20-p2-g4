import React from 'react';
import './Button.css';

const Button = (props) => {
  const {func, txt} = props
  return (
    <button className="button" onClick={func}>{txt}</button>
  )
}

export default Button