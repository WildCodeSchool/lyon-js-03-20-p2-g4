import React from 'react';
import '../styles/Button.css';

const Button = (props) => {
  const { onClick, content, className } = props;
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
