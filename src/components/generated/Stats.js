import React from "react";
import StatItem from "./StatItem";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats">
      <div className="container">
        <div className="row">
          <StatItem 
            value="46%" 
            description1="Of couples spend between," 
            description2="50K-100K on their wedding" 
            isHighlighted 
          />
          <StatItem 
            value="13" 
            description1="Vendors are booked on average" 
            description2="across 3 functions" 
            isHighlighted
          />
          <StatItem 
            value="45,000" 
            description1="South Asian weddings occur a year," 
            description2="Generating 3bn for the industry" 
            isHighlighted 
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
