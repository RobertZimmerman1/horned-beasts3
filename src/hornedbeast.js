import './App.css';
import React from 'react';

function Hornedbeast (props) {
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      {/* <img>{props.imageUrl}</img> */}
      <p>{props.description}</p>
    </div>
  );
}

export default Hornedbeast;
