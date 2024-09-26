import React from "react";
import "../styles/ProgressBar.scss";

function ProgressBar(props) {
  // Look into financial dashboard to see how I did it before!
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-inner-container">
        <div className="progress-bar">
          {/* <h3>Percentage</h3> */}
          {/* {Math.floor((props.listItems.length / props.listItems) * 100)}
        <span>%</span> */}
        </div>
        <span
          className="progress-bar-color"
          style={{
            width: `${props.totalCompleted}px`,
            backgroundColor: `hsl(${Math.floor(
              props.totalCompleted
            )}, 100%, 50%)`,
          }}
          // out of 100^
        ></span>
      </div>
      <h3 style={{ width: `${props.totalCompleted}px` }}>
        {props.totalCompleted}%
      </h3>
    </div>
  );
}

export default ProgressBar;
