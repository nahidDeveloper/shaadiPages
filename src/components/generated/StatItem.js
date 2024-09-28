import React from "react";
import "./StatItem.css";

function StatItem({ value, description1, description2, isHighlighted }) {
  return (
    <div className="column">
      <div className="stat">
        <div className="value" style={{ color: isHighlighted ? 'rgba(174,58,142,1)' : 'rgba(0, 0, 0, 1)' }}>
          {value}
        </div>
        <div className="description1">{description1}</div>
        <div className="description2">{description2}</div>
      </div>
    </div>
  );
}

export default StatItem;
