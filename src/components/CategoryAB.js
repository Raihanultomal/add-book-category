import React from 'react';
import '../CSS/categoryA.css';

export default function CategoryAB(props) {
  const fromCateoryB = () => {
    const dataForDetail = props.data;
    props.homeTodetails(dataForDetail);
  };
  return (
    <div>
      <h1>Category B:</h1>

      <div className="scroll-bg">
        <div className="scrol-bar">
          <div className="scroll-content" style={{ display: 'flex' }}>
            <h3>Title : {props.data.title}</h3>
            <button onClick={fromCateoryB}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
