import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, content, className, legend }) => {
  return (
    <>
      <div className='button-legend-container'>
        <button className={className} onClick={onClick}>
          {content}
        </button>
        <p className='button-legend'>{legend}</p>
      </div>
    </>
  );
};

export default Button;
