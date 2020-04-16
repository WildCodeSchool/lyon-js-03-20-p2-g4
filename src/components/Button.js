import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  const { onClick, txt } = props;
  return (
    <button className='button' onClick={onClick}>
      {txt}
    </button>
  );
};

export default Button;
