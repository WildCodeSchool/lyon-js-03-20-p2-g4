import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  const { onClick, content } = props;
  return (
    <button className='button' onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
