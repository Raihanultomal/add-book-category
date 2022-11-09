import React from 'react';

export default function DetailsField(props) {
  // console.log(props);
  return (
    <div>
      <div className="scroll-bg">
        <div className="scrol-bar">
          <div className="scroll-content">
            <h3> {props.detailsData.title} </h3>
            <p>{props.detailsData.url}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
