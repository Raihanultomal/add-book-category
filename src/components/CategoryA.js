import React from 'react';
import '../CSS/categoryA.css';

export default function CategoryA(props) {
  console.log(props);

  const fromCateoryA = () => {
    const dataForDetail = props.data;
    props.homeTodetails(dataForDetail);
  };

  // const {title,url,category} = props.newItem;

  return (
    <div>
      <h1>Category A:</h1>
      <div className="scroll-bg">
        <div className="scrol-bar">
          <div className="scroll-content" style={{ display: 'flex' }}>
            <h3>Title : {props.data.title}</h3>

            <button onClick={fromCateoryA}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
