import React from "react";
import ProgressBar from "./ProgressBar";
import "./Problem.css";

function Problem() {
  return (
    <div className="problem">
      <div className="content">
        <div className="title">
          The Top Three Problems that Engaged Couples Struggle with are:
        </div>
        <div className="subtitle">Survey conducted by Statista UK</div>
        <div className="item">Staying within budget</div>
        <ProgressBar percentage="100%" />
        <div className="item">Not knowing about costs</div>
        <ProgressBar percentage="79%" />
        <div className="item">Not knowing where to start</div>
        <ProgressBar percentage="74%" />
      </div>
    </div>
  );
}

export default Problem;
