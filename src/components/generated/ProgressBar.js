import React from "react";
import "./ProgressBar.css";

function ProgressBar({ percentage }) {
  return (
    <div className="progress-bar">
      <div className="track">
        <div className="fill" style={{ width: percentage }} />
      </div>
      <div className="percentage">{percentage}</div>
    </div>
    
  );
}

export default ProgressBar;

