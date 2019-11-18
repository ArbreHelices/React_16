import React, { useState } from 'react';

import './Button.scss';

const Button = ({ handleClick, label, active }) => {

  const handle = () => handleClick();

  if(active == undefined) active = false;

  return (
    <p>
      <button 
        className="btn btn-dark"
        disabled={active}
        onClick={handle}
      >
        {label}
      </button>
    </p>
  );
}

export default Button;