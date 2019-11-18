import React, { useState } from 'react';

const Container = (props) => {

  return (
    <div className="container">
      <header className="container">
        {props.header}
      </header>
      <div className="row">
        <div className="col">
          {props.children}
        </div>
        <div className="col">
          {props.left}
        </div>
      </div>
    </div>
  );
}

export default Container;